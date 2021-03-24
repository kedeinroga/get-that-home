module Queries
  module Properties
    class FetchProperties < Queries::BaseQuery
      type [Types::PropertyType], null: false

      def resolve
        Property.all.order(created_at: :desc)
      end
    end
  end
end
