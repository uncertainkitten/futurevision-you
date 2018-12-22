class CreateFutureVisions < ActiveRecord::Migration[5.2]
  def change
    create_table :future_visions do |t|
      t.string :title
      t.text :body
      t.date :deadline
      t.integer :user_id

      t.timestamps
    end
  end
end
