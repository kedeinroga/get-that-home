module Mutations
  class DestroyProperty < Mutations::BaseMutation
    argument :id, ID, required: true

    type Types::PropertyType, null: false

    def resolve(id:)
      Property.find(id).destroy
    end
  end
end
