json.extract! @goal, :id, :text, :deadline, :progress, :completed, :level
if @steps
  json.steps @steps, :id, :text, :level
else
  json.set! :future_vision do
    json.set! :id, @future_vision.id
    json.set! :text, @future_vision.text
    json.set! :level, @future_vision.level
  end
end