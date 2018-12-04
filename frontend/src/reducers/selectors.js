export const futureVisionGoggles = (state) => {
  const futureVisions = Object.values(state.entities.goals).filter(goal => goal.level === "Future Vision");
  return futureVisions
}