# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_12_12_055054) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "goals", force: :cascade do |t|
    t.integer "progress", null: false
    t.integer "user_id", null: false
    t.date "deadline", null: false
    t.string "text", null: false
    t.string "level", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "completed"
    t.integer "future_vision_id"
    t.index ["future_vision_id"], name: "index_goals_on_future_vision_id"
    t.index ["user_id"], name: "index_goals_on_user_id"
  end

  create_table "subgoals", force: :cascade do |t|
    t.integer "goal_id", null: false
    t.integer "value", null: false
    t.boolean "checked"
    t.string "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["goal_id"], name: "index_subgoals_on_goal_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username"
  end

end
