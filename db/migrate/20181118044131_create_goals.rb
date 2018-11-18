class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.integer :progress, null: false
      t.integer :user_id, null: false, index: true
      t.date :deadline, null: false
      t.string :text, null: false
      t.string :type, null: false
      t.timestamps
    end
  end
end
