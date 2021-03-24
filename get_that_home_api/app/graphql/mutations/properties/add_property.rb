module Mutations
  module Properties
    class AddProperty < Mutations::BaseMutation
      argument :params, Types::Input::PropertyInputType, required: true

      field :property, Types::PropertyType, null: false

      def resolve(params:)
        property_params = Hash params

        begin
          property = Property.create!(property_params)

          { property: property }
        rescue ActiveRecord::RecordInvalid => e
          GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
            " #{e.record.errors.full_messages.join(', ')}")
        end
      end
    end
  end
end
