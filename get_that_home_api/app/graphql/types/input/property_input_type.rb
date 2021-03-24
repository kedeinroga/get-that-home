module Types
  module Input
    class PropertyInputType < Types::BaseInputObject
      argument :operation_type, Integer, required: true
      argument :address, String, required: true
      argument :rent, Integer, required: true
      argument :maintanance, Integer, required: false
      argument :property_type, Integer, required: true
      argument :bedrooms, Integer, required: false
      argument :bathrooms, Integer, required: false
      argument :area, Float, required: true
      argument :pets, Boolean, required: true
      argument :about, String, required: false
      argument :photos, String, required: true
      argument :user_id, Integer, required: true
    end
  end
end
