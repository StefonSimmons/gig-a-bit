Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users
  resources :posts

  resources :topics, only: :index

  get '/topics_posts', to: 'topics#topics_posts'
  get '/users_posts_topics', to: 'users#users_posts_topics'
  get '/users_topics_posts', to: 'users#users_topics_posts'

end
