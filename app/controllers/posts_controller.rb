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
    render json: @new_post
  end

  def update
    @updated_post = Post.find(params[:id])
    @updated_post.update(post_params)
    render json: @updated_post
  end

  def destroy
    @destroyed_user = Post.find(params[:id])
    @destroyed_user.destroy()
    render json: 'destroyed post'
  end


  private

  def post_params
    params.require(:post).permit(:media_link, :bullet_one, :bullet_two, :bullet_three, :topic_id, :user_id)
  end
end