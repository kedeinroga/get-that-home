module Queries
  module Users
    class FetchUsers < Queries::BaseQuery
      type [Types::UserType], null: false

      def resolve
        User.all
      end
    end
  end
end
