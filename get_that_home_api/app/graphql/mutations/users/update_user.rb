module Mutations
  module Users 
    class UpdateUser < Mutations::BaseMutation
      argument :params, Types::Input::UserInputType, required: true

      field :user, Types::UserType, null: false

      def resolve( params:)
        user_params = Hash params

        begin
          user = context[:current_user]
          user.update!(user_params)

          { user: user }
        rescue ActiveRecord::RecordInvalid => e
          GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
            " #{e.record.errors.full_messages.join(', ')}")
        end
      end
    end
  end
end
