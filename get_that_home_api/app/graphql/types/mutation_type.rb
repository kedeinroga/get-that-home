module Types
  class MutationType < Types::BaseObject
    field :add_property, mutation: Mutations::Properties::AddProperty
    field :update_property, mutation: Mutations::Properties::UpdateProperty
    # field :destroy_property, mutation: Mutations::DestroyProperty
  end
end
