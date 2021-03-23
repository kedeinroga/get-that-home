class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.integer :operation_type, default: 0
      t.string :address
      t.integer :rent
      t.integer :maintanance, default: 0
      t.integer :property_type, default: 0
      t.integer :bedrooms, default: 0
      t.integer :bathrooms, default: 0
      t.float :area
      t.boolean :pets, default: false
      t.text :about
      t.string :photos
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
