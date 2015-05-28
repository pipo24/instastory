
user = User.create!(email: "a@g.com", password: "password", password_confirmation: "password", fullname: "filippo", age: 22, gender: "male")

# stories = user.stories.create!(title: "Boom Story", description: "hello i am boom")


# stories.images.create!(title: "Boom", picture: "hello" )
# stories.images.create!(title: "Boom 2", picture: "hello 2" )






require 'instagram'

story = user.stories.create!(title: "Test", description: "testing description", user_id: user.id)

client = Instagram.client(client_id: ENV['INSTAGRAM_FINAL_PROJECT_API_KEY'])

r = client.tag_recent_media('cat')
r.each do |image|
  story.images.create!({
    title:          image.filter, 
    tags:           image.tags, 
    image_username: image.caption.from.full_name, 
    # longitude:      image[:location][:longitude], 
    # latitude:       image[:location][:latitude], 
    # location_name:  image[:location][:location_name], 
    uploaded_at:    image.created_time,
    picture:        image[:images].standard_resolution.url, 
    story_id:       story.id
  })
end

binding.pry
# [:images][:standard_resolution][:url]
