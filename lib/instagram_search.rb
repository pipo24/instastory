class InstagramSearch

  def self.search(hashtag, story)
    client  = Instagram.client(client_id: ENV['INSTAGRAM_FINAL_PROJECT_API_KEY'])

    images = client.tag_recent_media(hashtag)

    images.each do |image|
      if image.location?
        longitude     = image.location.longitude.to_i
        latitude      = image.location.latitude.to_i
        location_name = image.location.name
      end
      if image.caption.text?
        title = image.caption.text.split('#')[0]
      end
      story.images.create!({
        title:          title, 
        tags:           image.tags.join(", #").insert(0, "#"), 
        image_username: image.caption.from.full_name, 
        longitude:      longitude, 
        latitude:       latitude, 
        location_name:  location_name, 
        uploaded_at:    Time.at(image.created_time.to_i).to_date.to_s,
        picture:        image.images.standard_resolution.url, 
        story_id:       story.id
        })
    end

    next_images = client.tag_recent_media(hashtag, {max_id: images.pagination.next_max_id})

    
    next_images.each do |image|
      if image.location?
        longitude     = image.location.longitude.to_i
        latitude      = image.location.latitude.to_i
        location_name = image.location.name
      end
      if image.caption.text?
        title = image.caption.text.split('#')[0]
      end
      story.images.create!({
        title:          title, 
        tags:           image.tags.join(", #").insert(0, "#"), 
        image_username: image.caption.from.full_name, 
        longitude:      longitude, 
        latitude:       latitude, 
        location_name:  location_name, 
        uploaded_at:    Time.at(image.created_time.to_i).to_date.to_s,
        picture:        image.images.standard_resolution.url, 
        story_id:       story.id
        })
    end

      # next_images = client.tag_recent_media(hashtag, {max_id: images.pagination.next_max_id})
      # next_images.each do |image|
      #   if image.location?
      #     longitude     = image.location.longitude.to_i
      #     latitude      = image.location.latitude.to_i
      #     location_name = image.location.name
      #   end
      #   story.images.create!({
      #     title:          image.caption.text.split('#')[0], 
      #     tags:           image.tags.join(", #").insert(0, "#"), 
      #     image_username: image.caption.from.full_name, 
      #     longitude:      longitude, 
      #     latitude:       latitude, 
      #     location_name:  location_name, 
      #     uploaded_at:    Time.at(image.created_time.to_i).to_date.to_s,
      #     picture:        image.images.standard_resolution.url, 
      #     story_id:       story.id
      #     })
      # end
    end
  end
