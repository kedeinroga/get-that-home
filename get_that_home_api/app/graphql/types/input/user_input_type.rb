module Types
  module Input
    class UserInputType < Types::BaseInputObject
      argument :email, String, required: true
      argument :name, String, required: true
      argument :password, String, required: true
      argument :phone, Integer, required: true
      argument :role, Integer, required: false
    end
  end
end
