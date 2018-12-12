class CreateSubgoals < ActiveRecord::Migration[5.2]
  def change
    create_table :subgoals do |t|
      t.integer :goal_id, null: false, index: true
      t.integer :value, null: false
      t.boolean :checked
      t.string :body, null: false
      t.timestamps
    end
  end
end
