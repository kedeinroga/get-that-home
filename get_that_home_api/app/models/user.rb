class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :properties, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :contacteds, dependent: :destroy
  has_many :favorited_properties, through: :favorites, source: :property, dependent: :destroy
  has_many :contacted_properties, through: :contacteds, source: :property, dependent: :destroy
end
