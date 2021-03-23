module Mutations
  class UpdateProperty < Mutations::BaseMutation
    argument :id, ID, required: true

    argument :params, Types::Input::PropertyInputType, required: true

    field :property, Types::PropertyType, null: false

    def resolve(id:, params:)
      property_params = Hash params

      begin
        property = Property.find(id)
        property.update!(property_params)

        { property: property }
      rescue ActiveRecord::RecordInvalid => e
        GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
          " #{e.record.errors.full_messages.join(', ')}")
      end
    end
  end
end
