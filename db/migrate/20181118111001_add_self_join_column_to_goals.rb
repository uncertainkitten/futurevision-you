class AddSelfJoinColumnToGoals < ActiveRecord::Migration[5.2]
  def change
    add_column :goals, :future_vision_id, :integer
    add_index :goals, :future_vision_id
  end
end
