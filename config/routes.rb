Rails.application.routes.draw do
  get 'static/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/api/random', to: 'messages#random_greeting'

  # Defines the root path route ("/")
  root "messages#random_greeting"
end
