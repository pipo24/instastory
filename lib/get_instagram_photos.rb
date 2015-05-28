class GetInstagramPhotos

  def self.callInstagram(hashtag, story)
    client = Instagram.client(client_id: ENV['INSTAGRAM_FINAL_PROJECT_API_KEY'])
    searchTag(hashtag, story)
  end

  def searchTag(hashtag, story)
    r = client.tag_recent_media(hashtag)
    saveToDatabase(r, story)
  end

  def saveToDatabase(r, story)
    r.each do |image|
      story.images.create!({
        title:          image.filter, 
        tags:           image.tags, 
        image_username: image.caption.from.full_name, 
        # longitude:      image.try(location).longitude, 
        # latitude:       image.try(location).latitude, 
        # location_name:  image.try(location).name, 
        uploaded_at:    image.created_time,
        picture:        image.images.standard_resolution.url
        })
    end
  end

end