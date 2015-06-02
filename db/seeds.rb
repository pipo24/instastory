
user = User.create!(email: "a@g.com", password: "password", password_confirmation: "password", fullname: "filippo", age: 22, gender: "male")

story = user.stories.create!(title: "Test", description: "testing description", hashtag: "dog")

client = Instagram.client(client_id: ENV['INSTAGRAM_FINAL_PROJECT_API_KEY'])

binding.pry

instagram_user = client.user_search(username, count: 1)

insta_user_picture  = instagram_user[0].profile_picture
insta_user_fullname = fullname