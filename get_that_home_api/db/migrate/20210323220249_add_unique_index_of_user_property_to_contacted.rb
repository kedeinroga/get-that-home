class AddUniqueIndexOfUserPropertyToContacted < ActiveRecord::Migration[6.1]
  def change
    add_index :contacteds, %i[user_id property_id], unique: true
  end
end
