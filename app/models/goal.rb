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

class Goal < ApplicationRecord
  validates :level, presence: true, inclusion: {in: ["Future Vision", "Monthly", "Weekly", "Daily"]}
  validates :progress, presence: true, numericality: {only_integer: true, greater_than: -1, less_than: 101}
  validates :text, :deadline, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :future_vision,
  primary_key: :id,
  foreign_key: :future_vision_id,
  class_name: :Goal,
  optional: true

  has_many :goals,
  primary_key: :id,
  foreign_key: :future_vision_id,
  class_name: :Goal,
  dependent: :destroy
end
