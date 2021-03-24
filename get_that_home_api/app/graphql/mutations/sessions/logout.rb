module Mutations
  module Sessions
    class Logout < Mutations::BaseMutation
      field :success, Boolean, null: true
      def resolve
        context[:current_user].invalidate_token
        { success: true }
      end
    end
  end
end
