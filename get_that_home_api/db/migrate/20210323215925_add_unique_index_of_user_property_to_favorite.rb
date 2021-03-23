class AddUniqueIndexOfUserPropertyToFavorite < ActiveRecord::Migration[6.1]
  def change
    add_index :favorites, %i[user_id property_id], unique: true
  end
end
