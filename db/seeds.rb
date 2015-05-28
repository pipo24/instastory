















require 'instagram'

client = Instagram.client(client_id: ENV['INSTAGRAM_FINAL_PROJECT_API_KEY'])

r = client.tag_recent_media('cat')
story = Story.create!(title: "Test")

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