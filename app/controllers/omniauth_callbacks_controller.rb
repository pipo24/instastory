class OmniauthCallbacksController < Devise::OmniauthCallbacksController

  PROVIDERS = [:instagram]

  PROVIDERS.each do |provider|
    define_method "#{provider}" do 
      @user = User.find_for_oauth(env["omniauth.auth"], current_user)

      if @user.persisted?
        @user.ensure_authentication_token
        cookies[:authentication_token] = @user.authentication_token
        sign_in_and_redirect @user, event: :authentication
      else
        # session["devise.#{provider}_data"] = env["omniauth.auth"]
        redirect_to new_user_registration_url
      end
    end
  end
end