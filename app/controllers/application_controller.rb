class ApplicationController < ActionController::API
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

  def encode(payload, expire = 12.hours.from_now)
    payload[:expire] = expire.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  def decode(token)
    decoded = JWT.decode(token, SECRET_KEY)[0]
    HashWithIndifferentAccess.new decoded
  end

  # FOR USER LOGIN VERIFICATION
  def authorize_request
    header = request.headers['Authorization']
    header = header.split(' ').last 
    if header
      # begin
        @decoded = decode(header)
        @loggedin_user = User.find(@decoded[:user_id])
      # rescue ActiveRecord::RecordNotFound => e
      #   render json: { errors: e.message }, status: :unauthorized
      # rescue JWT::DecodeError => e
      #   render json: { errors: e.message }, status: :unauthorized
    end
  end
end
