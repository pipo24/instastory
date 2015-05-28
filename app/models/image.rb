class Image < ActiveRecord::Base
  mount_uploader :picture, InstagramPictureUploader
  
  # ASSOCIATIONS
  belongs_to :story
end