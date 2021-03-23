class Property < ApplicationRecord
  belongs_to :user
  has_many :properties, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :favorited_users, through: :favorites, source: :user, dependent: :destroy
  has_many :contacted_users, through: :contacteds, source: :user, dependent: :destroy
end
