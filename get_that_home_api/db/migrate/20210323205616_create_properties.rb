class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.integer :operation_type
      t.string :address
      t.integer :rent
      t.integer :maintanance
      t.integer :property_type
      t.integer :bedrooms
      t.integer :bathrooms
      t.float :area
      t.boolean :pets
      t.text :about
      t.string :photos
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
