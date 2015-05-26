class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.text :image
      t.string :title
      t.text :tags
      t.string :image_username
      t.integer :longitude
      t.integer :latitude
      t.string :location_name
      t.datetime :uploaded_at

      t.timestamps null: false
    end
  end
end
