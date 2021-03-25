module Mutations
  module Favorites
    class AddFavorite < Mutations::BaseMutation
      argument :id, ID, required: true

      field :favorite, Types::FavoriteType, null: false
      def resolve(id:)
        property = Property.find(id)
        if context[:current_user].home_seeker?
          favorite = property.favorites.create!(user_id: context[:current_user].id)
        end
        { favorite: favorite }
      end
    end
  end
end
