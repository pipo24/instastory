class RegistrationsController < Devise::RegistrationsController

  after_create :update_user

  def update_user(self, email, fullname, password, password_confirmation)
    # Custom Class UserDataInstagram
    UserDataInstagram.search(self, email, fullname, password, password_confirmation)
  end

    # POST /resource
  def create
    build_resource(sign_up_params)
    resource.save

    if resource.persisted?
      render json: ["Congratulations! Your account has been successfully created!"]
    else
      render status: 422, json: resource.errors.full_messages
    end
  end

  def sign_up_params
   params.require(:registration).permit(:email, :password, :password_confirmation, :fullname, :age, :gender, :profile_picture)
  end
end
