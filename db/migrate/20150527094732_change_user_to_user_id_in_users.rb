class ChangeUserToUserIdInUsers < ActiveRecord::Migration
  def change
    remove_column :stories, :user
  end
end
