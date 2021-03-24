module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :fetch_properties, resolver: Queries::Properties::FetchProperties
    field :fetch_property, resolver: Queries::Properties::FetchProperty

    field :fetch_users, resolver: Queries::Users::FetchUsers
  end
end
