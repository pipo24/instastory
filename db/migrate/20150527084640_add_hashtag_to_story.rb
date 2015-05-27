class AddHashtagToStory < ActiveRecord::Migration
  def change
    add_column :stories, :hashtag, :string
  end
end
