Rails.application.routes.draw do
  resources :images
  resources :stories
  root "statics#index"
end
