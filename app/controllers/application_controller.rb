class ApplicationController < ActionController::API
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

  def encode(payload, expire = 12.hours.from_now)
    payload[:expire] = expire.to_i
    # JWT method for encrypting the payload and secret_key
    JWT.encode(payload, SECRET_KEY)
  end

  #FOR USER Browser VERIFICATION
  def decode(header_token)
    # Render/look at 'decoded_token' to see the 1st [0] and second [1] values
    # third value is the secret key.
    # second value contains information about JWT algorithm that we use for encoding and decoding token . added at encode?
    # first value is the payload
    decoded_token = JWT.decode(header_token, SECRET_KEY)[0]
    # this just makes it so that the string token object returned from the split header can be idenitifed as a symbol when we .find it.
    HashWithIndifferentAccess.new decoded_token
  end

  # FOR USER Browser VERIFICATION
  def authorize_request
    header = request.headers['Authorization']
    # Separates from the word 'Bearer'. on the front-end: token pulled from local storage droped into authorization again 
    header_token = header.split(' ').last 
    if header_token
      # begin
        @decoded = decode(header_token)
        ## grabs the user.id from the User database that matches the decoded token value
        @loggedin_user = User.find(@decoded[:user_id])
      # rescue ActiveRecord::RecordNotFound => e
      #   render json: { errors: e.message }, status: :unauthorized
      # rescue JWT::DecodeError => e
      #   render json: { errors: e.message }, status: :unauthorized
    end
  end
end


# Whats' the difference between header and token and payload
# token = new_user.id object (i.e. {user_id:new_user.id}) + secret_key
  # -created when user registers/ is created. goes through a JWT.encode method to for encryption.
# payload = token - secret_key. just an object
# header = the 'Bearer'+encrypted_token encryption provided by the programmer to the front end. encrypted[payload.algo.secret_key]
