module Mutations
  module Favorites
    class RemoveFavorite < Mutations::BaseMutation
      argument :property_id, ID, required: true
      argument :id, ID, required: true

      field :success, Boolean, null: true

      def resolve(property_id:, id:)
        property = Property.find(property_id)
        favorite = property.favorites.find(id)
        if Favorite.exists?(user_id: context[:current_user].id, property_id: property_id)
          favorite.destroy
        end
        { success: true }
      end
    end
  end
end
