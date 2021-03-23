module Types
  class MutationType < Types::BaseObject
    field :add_property, mutation: Mutations::AddProperty
  end
end
