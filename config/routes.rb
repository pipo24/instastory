Rails.application.routes.draw do
  resources :stories
  root"stories#index"
end
