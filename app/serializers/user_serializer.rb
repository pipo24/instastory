class UserSerializer < ActiveModel::Serializer
  has_many :stories
  attributes :id, :email, :authentication_token, :fullname, :age, :gender, :profile_picture, :bio, :nickname, :url

  def url
    "/#{object.class.to_s.pluralize.downcase}/#{object.id}.json"
  end
end
