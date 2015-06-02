class ImageSerializer < ActiveModel::Serializer
  has_one :story, except: [:images]
  attributes :id, :picture, :title, :tags, :image_username, :longitude, :latitude, :location_name, :uploaded_at, :story_id, :url

  def url
    "/#{object.class.to_s.pluralize.downcase}/#{object.id}.json"
  end
end