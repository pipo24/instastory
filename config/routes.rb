Rails.application.routes.draw do
  devise_for :users
  resources :images
  resources :stories
  root "statics#index"
end
