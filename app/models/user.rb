class User < ApplicationRecord

  # This will look for the keyword 'password' as a column in the User table and hash it. 
  # 'has_secure_password' must be included to read 'password' in the seed or in params.
  # orginally wrote password_digest in the seed without has_secure_password. It would show pw but wouldnt hash the pw.
  # Also the password wouldnt show in params. password_digest is only referred to in the schema.

  has_secure_password

  # validates :email, presence: true, uniqueness: true
  # # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  # validates :password, length: { minimum: 6 }

  has_many :posts  
  has_many :topics, through: :posts
end
