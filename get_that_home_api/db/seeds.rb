# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

puts 'Start generate users'
users = User.create([
  { email: "test@mail.com", password: "123456" , name: "test",  phone: 123456789, role: 0}, 
  { email: "test1@mail.com", password: "123456" , name: "test1",  phone: 123456789, role: 1 },
  { email: "test2@mail.com", password: "123456" , name: "test2",  phone: 123456789, role: 1 }
  ])
puts 'End generate users'

puts 'Start generate property'
users.each do |user|
  10.times do
    address = Faker::Address.street_name
    rent = (rand()*10**4).floor
    area = (rand()*10**3).floor
    about = Faker::Lorem.paragraph
    photos = "https://source.unsplash.com/user/erondu/512x384"
    if user.role == "landlord"
      property_data = {
        address: address,
        rent: rent,
        area: area,
        about: about,
        photos: photos,
        user_id: user.id
        }
        Property.find_or_create_by(property_data)
    end
  end
end
puts 'End generate property'