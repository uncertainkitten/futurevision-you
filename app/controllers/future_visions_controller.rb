class FutureVisionsController < ApplicationController
  before_action :set_future_vision, only: [:show, :update, :destroy]

  # GET /future_visions
  # GET /future_visions.json
  def index
    @future_visions = FutureVision.all
  end

  # GET /future_visions/1
  # GET /future_visions/1.json
  def show
  end

  # POST /future_visions
  # POST /future_visions.json
  def create
    @future_vision = FutureVision.new(future_vision_params)

    if @future_vision.save
      render :show, status: :created, location: @future_vision
    else
      render json: @future_vision.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /future_visions/1
  # PATCH/PUT /future_visions/1.json
  def update
    if @future_vision.update(future_vision_params)
      render :show, status: :ok, location: @future_vision
    else
      render json: @future_vision.errors, status: :unprocessable_entity
    end
  end

  # DELETE /future_visions/1
  # DELETE /future_visions/1.json
  def destroy
    @future_vision.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_future_vision
      @future_vision = FutureVision.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def future_vision_params
      params.require(:future_vision).permit(:title, :body, :deadline, :user_id)
    end
end
