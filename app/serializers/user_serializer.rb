class UserSerializer < ActiveModel::Serializer
  has_many :stories
  attributes :id, :email, :authentication_token, :fullname, :age, :gender, :profile_picture
end
