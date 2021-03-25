module Types
  class FavoriteType < Types::BaseObject
    field :id, ID, null: false
    field :user_id, Integer, null: false
    field :property_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :user_id, ID, null: false
    field :property_id, ID, null: false
  end
end
