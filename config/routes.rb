Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users
  resources :posts

  resources :topics, only: :index

  get '/topic_posts', to: 'topics#topic_posts'
  get '/user_topics_posts' to: 'users#user_topics_posts'
  
end
