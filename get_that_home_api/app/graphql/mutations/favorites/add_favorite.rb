class IncorrectUser < StandardError; end

module Mutations
  module Favorites
    class AddFavorite < Mutations::BaseMutation
      argument :id, ID, required: true

      field :favorite, Types::FavoriteType, null: false
      def resolve(id:)
        property = Property.find(id)
        if context[:current_user].home_seeker?
          favorite = property.favorites.create!(user_id: context[:current_user].id)
          { favorite: favorite }
        else
          raise IncorrectUser, 'You are not a home seeker'
        end
      rescue IncorrectUser => e
        GraphQL::ExecutionError.new(e.message)
      end
    end
  end
end
