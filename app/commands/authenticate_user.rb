class AuthenticateUser
  prepend SimpleCommand

  def initialize(name, password)
    @name = name
    @password = password
  end
  
  def call
    JsonWebToken.encode(user_id: user_id) if user
  end

  private
  attr_accessor :name, :password

  def user
    user = User.find_by(name: name)
    return user if user && user.authenticate(password)
    
    errors.add :user_authentication, 'Not legit, my dude'
    nil
  end
end