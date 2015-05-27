class ImageSerializer < ActiveModel::Serializer
  attributes :id, :picture, :title, :tags, :image_username, :longitude, :latitude, :location_name, :uploaded_at 
end