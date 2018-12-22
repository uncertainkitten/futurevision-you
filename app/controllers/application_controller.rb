class ApplicationController < ActionController::API
  before_action :authenticate_request
  attr_reader :current_user

  private
  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: {error: "No can do bro, we can't be authorizing people willy nilly"}, status: 401 unless @current_user
  end
end
