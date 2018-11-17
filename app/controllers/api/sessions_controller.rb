class Api::SessionsController < ApplicationController
  before_action :require_logout, only: :create

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login!(@user)
      render :show
    else
      render json: ["User not found"], status: 404
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: ["Not logged in"], status: 422
    end
  end
end
