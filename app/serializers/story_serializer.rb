class StorySerializer < ActiveModel::Serializer
  has_many :images, except: [:story]
  attributes :id, :title, :description, :url

  def url
    "/#{object.class.to_s.pluralize.downcase}/#{object.id}.json"
  end
end
