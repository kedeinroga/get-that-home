class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :phone, presence: true, length: { is: 9 }
  enum role: { home_seeker: 0, landlord: 1 }

  has_many :properties, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :contacteds, dependent: :destroy
  has_many :favorited_properties, through: :favorites, source: :property, dependent: :destroy
  has_many :contacted_properties, through: :contacteds, source: :property, dependent: :destroy

  has_secure_token
end
