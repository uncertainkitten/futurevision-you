class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?, :require_login, :require_logout

  def current_user
    return nil if session[:session_token].nil?
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
    current_user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_login
    if !logged_in?
      render json: ["You must be logged in"], status: 403
    end
  end

  def require_logout
    if logged_in?
      render json: ["You must be logged out"], status: 403
    end
  end

  def protected
    current_user
    unless logged_in? && @current_user.id.to_s == params[:id]
      render json: ["You can't do that"], status: 403
    end
  end
end
