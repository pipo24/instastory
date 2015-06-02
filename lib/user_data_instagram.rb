class UserDataInstagram

  def self.search(username, user)
    client  = Instagram.client(client_id: ENV['INSTAGRAM_FINAL_PROJECT_API_KEY'])

    instagram_user      = client.user_search(username)
    binding.pry
    instagram_user_id   = instagram_user[0].data.id.to_i

    instagram_user_info = Instagram.user(instagram_user_id)
    
  end
end