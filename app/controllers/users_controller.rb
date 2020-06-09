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
    @new_user = User.create(user_params)
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


  private

  def user_params
    params.require(:user).permit(:primary_name, :surname, :user_type, :email, :password)
    ### like writing this-- params[:user]
  end

end
