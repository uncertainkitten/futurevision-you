@goals.each do |goal|
  json.set! goal.id do
    json.extract! goal, :id, :text, :deadline, :progress, :level
  end
end