class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :user
      t.string :title
      t.text :description
      t.string :image

      t.timestamps null: false
    end
  end
end
