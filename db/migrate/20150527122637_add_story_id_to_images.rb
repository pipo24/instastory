class AddStoryIdToImages < ActiveRecord::Migration
  def change
    add_column :images, :story_id, :integer
  end
end
