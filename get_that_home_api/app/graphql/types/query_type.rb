module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :fetch_properties, resolver: Queries::Properties::FetchProperties
    field :fetch_property, resolver: Queries::Properties::FetchProperty
    field :user_properties, resolver: Queries::Properties::UserProperties

    field :fetch_users, resolver: Queries::Users::FetchUsers
    field :fetch_user, resolver: Queries::Users::FetchUser
    field :current_user, resolver: Queries::Users::CurrentUser
  end
end
