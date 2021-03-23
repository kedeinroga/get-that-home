class AddUniqueAddressToProperty < ActiveRecord::Migration[6.1]
  def change
    add_index :properties, :address, unique: true
  end
end
