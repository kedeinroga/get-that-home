module Queries
  module Users
    class CurrentUser < Queries::BaseQuery

      type Types::UserType, null: false
      def resolve()
        user = context[:current_user]

      rescue ActiveRecord::RecordNotFound => _e
        GraphQL::ExecutionError.new('User does not exist.')
      rescue ActiveRecord::RecordInvalid => e
        GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
          " #{e.record.errors.full_messages.join(', ')}")
      end
    end
  end
end