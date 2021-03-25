module Types
  class MutationType < Types::BaseObject
    field :add_property, mutation: Mutations::Properties::AddProperty
    field :update_property, mutation: Mutations::Properties::UpdateProperty
    # field :destroy_property, mutation: Mutations::DestroyProperty

    field :add_user, mutation: Mutations::Users::AddUser
    field :update_user, mutation: Mutations::Users::UpdateUser

    field :login, mutation: Mutations::Sessions::Login
    field :logout, mutation: Mutations::Sessions::Logout

    field :add_contacted, mutation: Mutations::Contacteds::AddContacted
    field :destroy_contacted, mutation: Mutations::Contacteds::DestroyContacted
    
    field :add_favorite, mutation: Mutations::Favorites::AddFavorite
    field :remove_favorite, mutation: Mutations::Favorites::RemoveFavorite
  end
end
