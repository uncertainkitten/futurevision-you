json.extract! @goal, :id, :text, :deadline, :progress, :completed, :level
if @steps
  @steps.each do |step|
    json.set! step.id do
      json.set! :id, step.id
      json.set! :text, step.text
      json.set! :level, step.level
    end
  end
else
  json.set! :future_vision do
    json.set! :id, @future_vision.id
    json.set! :text, @future_vision.text
    json.set! :level, @future_vision.level
  end
end