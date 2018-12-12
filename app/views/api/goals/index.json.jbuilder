@goals.each do |goal|
  json.set! goal.id do
    json.extract! goal, :id, :text, :deadline, :progress, :level
    if goal.goals
      json.steps goal.goals, :id, :text, :level
    else
      json.set! :future_vision do
        json.set! :id, goal.future_vision.id
        json.set! :text, goal.future_vision.text
        json.set! :level, goal.future_vision.level
      end
    end
  end
end