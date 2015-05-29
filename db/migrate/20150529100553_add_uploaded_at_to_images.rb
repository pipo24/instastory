class AddUploadedAtToImages < ActiveRecord::Migration
  def change
    add_column :images, :uploaded_at, :string
  end
end
