class RemoveUploadedAtFromImages < ActiveRecord::Migration
  def change
    remove_column :images, :uploaded_at
  end
end
