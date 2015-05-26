class AddAuthenticationTokenAndFullNameAndRoleAndAgeAndGenderAndProfilePictureToUsers < ActiveRecord::Migration
  def change
    add_column :users, :authentication_token, :string
    add_column :users, :fullname, :string
    add_column :users, :role, :string
    add_column :users, :age, :integer
    add_column :users, :gender, :string
    add_column :users, :profile_picture, :text
  end
end
