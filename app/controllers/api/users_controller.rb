class Api::UsersController < ApplicationController
  before_action :protected, only: [:show, :destroy, :update]
  before_action :require_logout, only: :create

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render :show
    else
      render json: ["User not found"], status: 404
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
