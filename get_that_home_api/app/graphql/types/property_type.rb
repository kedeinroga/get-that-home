module Types
  class PropertyType < Types::BaseObject
    field :id, ID, null: false
    field :operation_type, String, null: false
    field :address, String, null: false
    field :rent, Integer, null: false
    field :maintanance, Integer, null: true
    field :property_type, String, null: false
    field :bedrooms, Integer, null: true
    field :bathrooms, Integer, null: true
    field :area, Float, null: false
    field :pets, Boolean, null: false
    field :about, String, null: true
    field :photos, String, null: false
    field :user_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :id, ID, null: false
    field :operation_type, String, null: false
    field :address, String, null: false
    field :rent, Integer, null: false
    field :maintanance, Integer, null: false
    field :property_type, String, null: false
    field :bedrooms, Integer, null: false
    field :bathrooms, Integer, null: false
    field :area, Float, null: false
    field :pets, Boolean, null: false
    field :about, String, null: false
    field :photos, String, null: false
    field :user_id, ID, null: false
  end
end
