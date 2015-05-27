class Image < ActiveRecord::Base
  # ASSOCIATIONS
  has_and_belongs_to_many :stories
  has_one :user, through: :stories

end
