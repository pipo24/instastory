
user = User.create!(
  email: "a@g.com",
  password: "password",
  password_confirmation: "password",
  fullname: "Filippo SMM",
  age: 22,
  gender: "male",
  nickname: "piposmm",
  bio: "Oh yehhhhhh",
  profile_picture: "http://images.ak.instagram.com/profiles/profile_213821710_75sq_1370000037.jpg"
  )

story = user.stories.create!(
  title: "Test",
  description: "testing description",
  hashtag: "dog"
  )

client = Instagram.client(
  client_id: ENV['INSTAGRAM_FINAL_PROJECT_API_KEY']
  )
