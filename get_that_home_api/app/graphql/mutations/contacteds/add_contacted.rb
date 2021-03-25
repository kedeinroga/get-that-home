class IncorrectOwner < StandardError; end
module Mutations
  module Contacteds
    class AddContacted < Mutations::BaseMutation
      argument :id, ID, required: true

      field :contacted, Types::ContactedType, null: false
      def resolve(id:)
        
        begin
          if context[:current_user].home_seeker?
            property = Property.find(id)
            contacted = Contacted.create!(user: context[:current_user], property: property)
            { contacted: contacted }
          else
            raise IncorrectOwner, "A property owner cannot contact"
          end

        rescue IncorrectOwner => e
          GraphQL::ExecutionError.new(e.message)
        rescue ActiveRecord::RecordInvalid => e
          GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
            " #{e.record.errors.full_messages.join(', ')}")
        end
      end
    end
  end
end