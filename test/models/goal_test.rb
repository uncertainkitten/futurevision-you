# == Schema Information
#
# Table name: goals
#
#  id               :bigint(8)        not null, primary key
#  progress         :integer          not null
#  user_id          :integer          not null
#  deadline         :date             not null
#  text             :string           not null
#  level            :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  completed        :boolean
#  future_vision_id :integer
#

require 'test_helper'

class GoalTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
