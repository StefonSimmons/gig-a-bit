class AuthenticationController < ApplicationController
  before_action :authorize_request, only: :verify

  # POST /auth/login
  def login
    @user = User.find_by_username(login_params[:email])
    # authenticate method provided by Bcrypt
    if @user.authenticate(login_params[:password]) 
      @token = encode({ user_id: @user.id })
      render json: { user: @user, token: @token }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end

  # GET /auth/verify
  def verify
    render json: @loggedin_user, status: :ok
  end

  private

  def login_params
    params.require(:auth).permit(:email, :password)
  end
end
