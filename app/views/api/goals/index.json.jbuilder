@goals.each do |goal|
  json.extract! goal, :id, :text, :deadline, :progress, :level
end