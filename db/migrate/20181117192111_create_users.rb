class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, index: true, unique: true, null: false
      t.string :password_digest, null: false
      t.string :session_token, index: true, unique: true, null: false
      t.timestamps
    end
  end
end
