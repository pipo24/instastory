class Story < ActiveRecord::Base
  # ASSOCIATIONS
  has_many :images, dependent: :destroy
  belongs_to :user

  # VALIDATIONS
  validates :title, presence: true, length: { maximum: 25 }
  validates :description, presence: true, length: { maximum: 300 }
end
