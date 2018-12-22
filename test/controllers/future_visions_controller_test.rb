require 'test_helper'

class FutureVisionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @future_vision = future_visions(:one)
  end

  test "should get index" do
    get future_visions_url, as: :json
    assert_response :success
  end

  test "should create future_vision" do
    assert_difference('FutureVision.count') do
      post future_visions_url, params: { future_vision: { body: @future_vision.body, deadline: @future_vision.deadline, title: @future_vision.title, user_id: @future_vision.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show future_vision" do
    get future_vision_url(@future_vision), as: :json
    assert_response :success
  end

  test "should update future_vision" do
    patch future_vision_url(@future_vision), params: { future_vision: { body: @future_vision.body, deadline: @future_vision.deadline, title: @future_vision.title, user_id: @future_vision.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy future_vision" do
    assert_difference('FutureVision.count', -1) do
      delete future_vision_url(@future_vision), as: :json
    end

    assert_response 204
  end
end
