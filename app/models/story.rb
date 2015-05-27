class Story < ActiveRecord::Base

  validates :title, presence: true, length: { maximum: 25 }
  validates :description, presence: true, length: { maximum: 300 }
end
