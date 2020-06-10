class ApplicationController < ActionController::API
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

  def encode(payload, expire = 12.hours.from_now)
    payload[:expire] = expire.to_i
    # JWT method for encrypting the payload and secret_key
    JWT.encode(payload, SECRET_KEY)
  end

  #FOR USER LOGIN VERIFICATION
  def decode(header_token)
    # Render decoded to see the 1st [0] and second [1] values
    # second value contains information about JWT algorithm that we use for encoding and decoding token
    # first value is the payload/header_token
    decoded_token = JWT.decode(header_token, SECRET_KEY)[0]
    # this just makes it so that the string token object returned from the split header can be idenitifed as a symbol when we .find it.
    HashWithIndifferentAccess.new decoded_token
  end

  # FOR USER LOGIN VERIFICATION
  def authorize_request
    header = request.headers['Authorization']
    # Separated from the word 'Bearer'. on the front-end.
    header_token = header.split(' ').last 
    if header_token
      # begin
        @decoded = decode(header_token)
        ## grabs the user.id from the database that matches the decoded token value
        @loggedin_user = User.find(@decoded[:user_id])
      # rescue ActiveRecord::RecordNotFound => e
      #   render json: { errors: e.message }, status: :unauthorized
      # rescue JWT::DecodeError => e
      #   render json: { errors: e.message }, status: :unauthorized
    end
  end
end


# Whats' the difference between header and token and payload
# token = new_user.id object (i.e. {user_id:new_user.id})
  # -created when user registers/ is created. goes through a JWT.encode method to for encryption.
# payload = token
# header = the 'Bearer'+encrypted_token encryption provided by the programmer to the front end.
