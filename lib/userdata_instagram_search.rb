class InstagramSearch

  def self.search(hashtag, story)
    client  = Instagram.client(client_id: ENV['INSTAGRAM_FINAL_PROJECT_API_KEY'])

    images = client.tag_recent_media(hashtag)
    images.each do |image|
      story.images.create!({
        title:          image.caption.text.split('#')[0], 
        tags:           image.tags.join(", #").insert(0, "#"), 
        image_username: image.caption.from.full_name, 
        # longitude:      image.location.longitude, 
        # latitude:       image.location.latitude, 
        # location_name:  image.location.name, 
        uploaded_at:    Time.at(image.created_time.to_i).to_date.to_s,
        picture:        image.images.standard_resolution.url, 
        story_id:       story.id
      })
    end
  end
end