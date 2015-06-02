Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'registrations', 
    sessions: "sessions",
    omniauth_callbacks: 'omniauth_callbacks'
  }

  # Used for login & logout
  devise_scope :user do 
    get "/user/:authentication_token", to: "sessions#show"
    delete "/user/:authentication_token", to: "sessions#destroy"
  end

  # Ensure that show (as member) does not conflict users/:id
  resources :users, only: [:index, :show]
  resources :images
  resources :stories
  root "statics#index"
end
