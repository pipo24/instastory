class StorySerializer < ActiveModel::Serializer
  has_many :images, except: [:story]
  attributes :id, :title, :description
end
