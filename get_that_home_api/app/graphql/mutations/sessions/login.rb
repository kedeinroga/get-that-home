module Mutations
  module Sessions
    class Login < Mutations::BaseMutation
      argument :params, Types::Input::SessionInputType, required: true

      field :user, Types::UserType, null: false

      def resolve(params:)
        session_params = Hash params
        user = User.find_by(email: session_params[:email])
        if user&.valid_password?(session_params[:password])
          user.regenerate_token
        else
          respond_unauthorized('Incorrect email or password')
        end

        { user: user }
      rescue ActiveRecord::RecordInvalid => e
        GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
          " #{e.record.errors.full_messages.join(', ')}")
      end
    end
  end
end
