class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end
  
  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    @new_user = User.new(user_params)
    @new_user.save
    render json: @new_user
  end

  def update  
    @updated_user = User.find(params[:id])
    @updated_user.update(user_params)
    render json: @updated_user
  end

  def destroy
    @destroyed_user = User.find(params[:id])
    @destroyed_user.destroy()
    render json: "Deleted #{params[:primary_name]}"
  end 

  # CUSTOM ACTION
  def users_posts_topics
    @users = User.all
    render json: @users.to_json(:include => { :posts => {:include => :topic}})
  end
  # CUSTOM ACTION
  def users_topics_posts
    @users = User.all
    render json: @users.to_json(:include => { :topics => {:include => :posts}})
  end


  private

  def user_params
    params.require(:user).permit(:primary_name, :surname, :email, :password, :user_type)
  end

end
