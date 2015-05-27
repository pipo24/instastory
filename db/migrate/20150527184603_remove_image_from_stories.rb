class RemoveImageFromStories < ActiveRecord::Migration
  def change
    remove_column :stories, :image
  end
end
