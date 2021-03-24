module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :fetch_properties, resolver: Queries::FetchProperties
    field :fetch_property, resolver: Queries::FetchProperty
  end
end
