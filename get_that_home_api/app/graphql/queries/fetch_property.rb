module Queries
  class FetchProperty < Queries::BaseQuery
    type Types::PropertyType, null: false
    argument :id, ID, required: true

    def resolve(id:)
      Property.find(id)
    rescue ActiveRecord::RecordNotFound => _e
      GraphQL::ExecutionError.new('Note does not exist.')
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
        " #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
