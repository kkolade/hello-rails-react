Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/random_greeting', to: 'messages#random_greeting'

  # Defines the root path route ("/")
  root "static#index"
end
