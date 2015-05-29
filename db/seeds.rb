
user = User.create!(email: "a@g.com", password: "password", password_confirmation: "password", fullname: "filippo", age: 22, gender: "male")

story = user.stories.create!(title: "Test", description: "testing description", hashtag: "dog")
