class IncorrectUser < StandardError; end

module Mutations
  module Properties
    class UpdateProperty < Mutations::BaseMutation
      argument :id, ID, required: true

      argument :params, Types::Input::PropertyInputType, required: true

      field :property, Types::PropertyType, null: false

      def resolve(id:, params:)
        property_params = Hash params
        property_params[:user_id] = context[:current_user].id

        begin
          property = Property.find(id)
          if context[:current_user].id == property.user_id
            property.update!(property_params)
            { property: property }
          else
            raise IncorrectUser, "You don't own this property"
          end
        rescue IncorrectUser => e
          GraphQL::ExecutionError.new(e.message)
        rescue ActiveRecord::RecordInvalid => e
          GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
            " #{e.record.errors.full_messages.join(', ')}")
        end
      end
    end
  end
end
