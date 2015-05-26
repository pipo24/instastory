Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations', sessions: "sessions" }
  resources :images
  resources :stories
  root "statics#index"
end
