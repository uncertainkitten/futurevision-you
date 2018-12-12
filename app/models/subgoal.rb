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

class Subgoal < ApplicationRecord
  validates :value, presence: true, numericality: {only_integer: true, greater_than: -1, less_than: 101}
  validates :checked, inclusion: {in: [true, false]}
  validates :body, presence: true

  belongs_to :goal,
  primary_key: :id,
  foreign_key: :goal_id,
  class_name: :Goal
end
