json.array!(@images) do |image|
  json.extract! image, :id, :picture, :title, :tags, :image_username, :longitude, :latitude, :location_name, :uploaded_at
  json.url image_url(image, format: :json)
end
