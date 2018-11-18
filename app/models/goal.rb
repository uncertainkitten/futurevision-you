class Goal < ApplicationRecord
  validates :type, presence: true, inclusion: {in: ["Future Vision", "Monthly", "Weekly", "Daily"]}
  validates :progress, presence: true, numericality: {only_integer: true, greater_than: -1, less_than: 101}
  validates :text, :deadline, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User
end