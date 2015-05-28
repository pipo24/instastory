Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations', sessions: "sessions" }
 
  resources :users, only:[:index, :show]

  devise_scope :user do 
    get "/users/:authentication_token", to: "sessions#show"
    delete "/users/:authentication_token", to: "sessions#destroy"
  end

  resources :images
  resources :stories
  root "statics#index"
end
