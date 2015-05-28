# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create!(email: "a@g.com", password: "password", password_confirmation: "password", fullname: "filippo", age: 22, gender: "male")

# stories = user.stories.create!(title: "Boom Story", description: "hello i am boom")


# stories.images.create!(title: "Boom", picture: "hello" )
# stories.images.create!(title: "Boom 2", picture: "hello 2" )






require 'instagram'

client = Instagram.client(client_id: ENV['INSTAGRAM_FINAL_PROJECT_API_KEY'])

r = client.tag_recent_media('cat')
story = Story.create!(title: "Test", user_id: user.id)

r.each do |image|
  Image.create!({
    # title:          string, 
    # tags:           image["tags"], 
    # image_username: string, 
    # longitude:      integer, 
    # latitude:       integer, 
    # location_name:  image["location"]["name"], 
    # uploaded_at:    image["created_time"], 
    picture:        image["images"]["standard_resolution"]["url"], 
    story_id:       story.id
  })
end
