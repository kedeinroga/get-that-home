module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :email, String, null: false
    field :name, String, null: false
    field :phone, Integer, null: false
    field :role, String, null: true
    field :token, String, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :id, ID, null: false
    field :email, String, null: false
    field :name, String, null: false
    field :phone, Integer, null: false
    field :role, String, null: false
    field :token, String, null: false
  end
end
