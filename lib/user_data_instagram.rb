class UserDataInstagram

  def self.search(username, user)
    client  = Instagram.client(client_id: ENV['INSTAGRAM_FINAL_PROJECT_API_KEY'])

    instagram_user = client.user_search(username, count: 1)

    instagram_user_id   = instagram_user[0].profile_picture
    insta_user_fullname = fullname

    User.create!(
      email: "a@g.com",
      password: "password",
      password_confirmation: "password",
      fullname: "piposmm",
      age: 22,
      gender: "male",
      profile_picture: "http://images.ak.instagram.com/profiles/profile_213821710_75sq_1370000037.jpg")
    
  end
end