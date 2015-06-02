class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and 
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable, :omniauthable

  before_save :ensure_authentication_token

  # ASSOCIATIONS
  has_many :stories, dependent: :destroy
  has_many :images, through: :stories
  has_many :identities, dependent: :destroy

  # VALIDATIONS
  # validates :fullname, length: { maximum: 25 }
  # validates :age, length: { maximum: 2 }, numericality: true
  # validates :gender, inclusion: { in: %w(male female NA),
  #   message: "%{value} is not a valid gender" }

  TEMP_EMAIL_PREFIX = 'change@me'

  FIELDS = {
    instagram: {
      fullname:        [:info, :name],
      profile_picture: [:info, :image],
      bio:             [:info, :bio]
    } 
  }

  def generate_authentication_token
    loop do
      token = Devise.friendly_token
      break token unless User.where(authentication_token: token).first
    end
  end

  def ensure_authentication_token
    if authentication_token.blank?
      self.authentication_token = generate_authentication_token
    end
  end

  def self.find_for_oauth(auth, signed_in_resource = nil)
    # Get the identity and user if they exist
    identity = Identity.find_for_oauth(auth)
    user = signed_in_resource ? signed_in_resource : identity.user

    # Create the user if needed
    user = create_user(auth) if user.nil?

    # Associate the identity with the user if needed
    if identity.user != user
      identity.user = user
      identity.save!
    end

    # Return the user at the end of the method
    user
  end

  private
  def self.create_user(auth)
    email_is_verified = auth.info.email && (auth.info.verified || auth.info.verified_email)
    email = auth.info.email if email_is_verified

    user = User.find_by_email(email) if email

    if user.nil? 
      user = User.new 
      binding.pry
        # Generic for each provider
        FIELDS.try(:[], auth.try(:[], :provider).to_sym).each do |key, array|
          a = auth
          array.each do |method|
            a = a.try(:[], method)
          end
          user[key] = a if user[key].nil?
        end
      end

      # Set user email and password
      user.email    = email ? email : "#{TEMP_EMAIL_PREFIX}-#{auth.uid}-#{auth.provider}.com"
      user.password = Devise.friendly_token[0,20] if user.password.blank?

      # Set user
      if user.authentication_token?
        user.ensure_authentication_token
      end

      user.save!
      user
    end
  end
