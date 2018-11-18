class Api::GoalsController < ApplicationController
  before_action :require_login
  before_action :protected_goal, only: [:create, :destroy]

  def index
    @user = current_user
    @goals = @user.goals
    render :index
  end

  def show
    @goal = Goal.find_by(id: params[:id])

    if @goal
      if @goal.level == "Future Vision"
        @steps = @goal.goals
      else
        @future_vision = @goal.future_vision
      end
      render :show
    else
      render json: ["Goal not found"], status: 404
    end
  end

  def create
    @goal = Goal.new(goal_params)
    @goal.user_id = current_user.id

    if @goal.save
      if @goal.level == "Future Vision"
        @steps = @goal.goals
      else
        @future_vision = @goal.future_vision
      end
      render :show
    else
      render json: @goal.errors.full_messages, status: 422
    end
  end

  def update
    @goal = Goal.find_by(id: params[:id])

    if @goal.update(goal_params)
      if @goal.level == "Future Vision"
        @steps = @goal.goals
      else
        @future_vision = @goal.future_vision
      end
      render :show
    else
      render json: @goal.errors.full_message, status: 422
    end
  end

  def destroy
    @goal = Goal.find_by(id: params[:id])
    @goal.destroy
    render json: {}
  end

  private
  def goal_params
    params.require(:goal).permit(:text, :deadline, :progress, :level, :future_vision_id)
  end
end