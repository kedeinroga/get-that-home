module Types
  class ContactedType < Types::BaseObject
    field :user_id, Integer, null: false
    field :property_id, Integer, null: false
  end
end
