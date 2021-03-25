module Mutations
  module Contacteds
    class DestroyContacted < Mutations::BaseMutation
      argument :property_id, ID, required: true
      argument :id, ID, required: true

      field :success, Boolean, null: true

      def resolve(property_id:, id:)
        
        begin
          contacted = Contacted.find(id)
          if Contacted.exists?(user_id: context[:current_user].id, property_id: property_id)
            contacted.destroy
          end
          { success: true }
        end
      end
    end
  end
end