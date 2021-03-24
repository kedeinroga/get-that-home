module Types
  class SessionType < Types::BaseObject
    field :email, String, null: false
    field :password, String, null: false
  end
end
