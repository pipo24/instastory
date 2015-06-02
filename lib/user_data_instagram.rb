class UserDataInstagram

  def self.search(email, fullname, password, password_confirmation)
    client  = Instagram.client(client_id: ENV['INSTAGRAM_FINAL_PROJECT_API_KEY'])

    instagram_user = client.user_search(fullname, count: 1)

    instagram_user_picture   = instagram_user[0].profile_picture
    insta_user_fullname = instagram_user[0].full_name

    user.update!(
      fullname: fullname,
      profile_picture: instagram_user_picture,
      password: password,
      password_confirmation: password_confirmation
      )
    
  end
end
