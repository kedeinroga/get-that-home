module Types
  module Input
    class UpdatePropertyInputType < Types::BaseInputObject
      argument :operation_type, Integer, required: false
      argument :address, String, required: false
      argument :rent, Integer, required: false
      argument :maintanance, Integer, required: false
      argument :property_type, Integer, required: false
      argument :bedrooms, Integer, required: false
      argument :bathrooms, Integer, required: false
      argument :area, Float, required: false
      argument :pets, Boolean, required: false
      argument :about, String, required: false
      argument :photos, String, required: false
    end
  end
end