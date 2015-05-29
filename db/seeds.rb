
user = User.create!(email: "a@g.com", password: "password", password_confirmation: "password", fullname: "filippo", age: 22, gender: "male")


require 'instagram'

story = user.stories.create!(title: "Test", description: "testing description", user_id: user.id)

client = Instagram.client(client_id: ENV['INSTAGRAM_FINAL_PROJECT_API_KEY'])

r = client.tag_recent_media('dog')
r.each do |image|
  url =  image.images.standard_resolution.url
  im = Image.create({
    title:          image.caption.text.split('#')[0], 
    tags:           image.tags, 
    image_username: image.caption.from.full_name, 
    # longitude:      image.location.longitude, 
    # latitude:       image.location.latitude, 
    # location_name:  image.location.name, 
    uploaded_at:    image.created_time,
    picture:        url, 
    story_id:       story.id
  })
  binding.pry
  puts im.attributes[:picture]
end

#binding.pry

