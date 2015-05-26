class AddPictureToImages < ActiveRecord::Migration
  def change
    add_column :images, :picture, :text
  end
end
