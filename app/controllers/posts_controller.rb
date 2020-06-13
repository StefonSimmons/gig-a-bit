class PostsController < ApplicationController
  
  def index
    @posts = Post.all
    render json: @posts 
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def create
    @new_post = Post.create(post_params)
    render json: @new_post, status: :created
  end

  def update
    @updated_post = Post.find(params[:id])
    @updated_post.update(post_params)
    render json: @updated_post
  end

  def destroy
    @destroyed_post = Post.find(params[:id])
    @destroyed_post.destroy()
    render json: 'destroyed post', status: :accepted
  end

  # CUSTOM ACTION
  def posts_user_topic
    @posts = Post.joins(:user, :topic).select(
      "posts.id, 
      posts.media_link, 
      users.id AS user_id,
      users.primary_name, 
      users.surname,
      topics.id AS topic_id,
      topics.name AS topic_name,
      users.email, 
      posts.bullet_one, 
      posts.bullet_two, 
      posts.bullet_three,
      posts.created_at,
      posts.updated_at"
    ).order('posts.created_at DESC')
    render json: @posts
  end

  private

  def post_params
    params.require(:post).permit(:media_link, :bullet_one, :bullet_two, :bullet_three, :topic_id, :user_id)
  end
end