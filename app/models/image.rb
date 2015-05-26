class Image < ActiveRecord::Base
  mount_uploader :picture, InstagramPictureUploader
end
