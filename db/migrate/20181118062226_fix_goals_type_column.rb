class FixGoalsTypeColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :goals, :type, :level
    add_column :goals, :completed, :boolean
  end
end
