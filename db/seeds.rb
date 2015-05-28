
user = User.create!(email: "a@g.com", password: "password", password_confirmation: "password", fullname: "filippo", age: 22, gender: "male")


require 'instagram'

story = user.stories.create!(title: "Test", description: "testing description", user_id: user.id)

client = Instagram.client(client_id: ENV['INSTAGRAM_FINAL_PROJECT_API_KEY'])

r = client.tag_recent_media('dog')
r.each do |image|
  Image.create!({
    title:          image.filter, 
    tags:           image.tags, 
    image_username: image.caption.from.full_name, 
    # longitude:      image.try(location).longitude, 
    # latitude:       image.try(location).latitude, 
    # location_name:  image.try(location).name, 
    uploaded_at:    image.created_time,
    picture:        image.images.standard_resolution.url, 
    story_id:       story.id
  })
end

binding.pry
# [:images][:standard_resolution][:url]
