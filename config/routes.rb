Rails.application.routes.draw do
  resources :stories
  root "statics#index"
end
