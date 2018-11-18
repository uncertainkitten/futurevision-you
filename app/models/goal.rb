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
  class_name: :Goal

  has_many :goals,
  primary_key: :id,
  foreign_key: :future_vision_id,
  class_name: :Goal,
  dependent: :destroy
end