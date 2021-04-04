module Queries
  module Properties
    class UserProperties < Queries::BaseQuery
      type [Types::PropertyType], null: false

      def resolve()
        if context[:current_user].landlord?
          context[:current_user].properties.order(created_at: :desc)
        end
        
      end
    end
  end
end
