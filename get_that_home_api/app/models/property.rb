class Property < ApplicationRecord
  enum operation_type: { rent: 0, sale: 1 }
  enum property_type: { apartment: 0, house: 1 }
  validates :address, presence: true, uniqueness: true
  validates :rent, presence: true
  validates :area, presence: true
  validates :photos, presence: true

  belongs_to :user
  has_many :properties, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :favorited_users, through: :favorites, source: :user, dependent: :destroy
  has_many :contacted_users, through: :contacteds, source: :user, dependent: :destroy
end
