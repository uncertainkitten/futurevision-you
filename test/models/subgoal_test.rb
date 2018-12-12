# == Schema Information
#
# Table name: subgoals
#
#  id         :bigint(8)        not null, primary key
#  goal_id    :integer          not null
#  value      :integer          not null
#  checked    :boolean
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class SubgoalTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
