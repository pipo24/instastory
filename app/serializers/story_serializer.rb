class StorySerializer < ActiveModel::Serializer
  has_one  :user, except: [:stories]
  has_many :images, except: [:story]
  attributes :id, :title, :description, :hashtag, :user_id, :url

  def url
    "/#{object.class.to_s.pluralize.downcase}/#{object.id}.json"
  end
end
