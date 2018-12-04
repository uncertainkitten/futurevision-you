import {connect} from 'react-redux';
import GoalItem from './goal_item';
import {fetchGoal, clearGoal, changeGoal, fetchGoals} from '../../actions/goals_actions';

const mapStateToProps = (state, ownProps) => ({
  goalId: ownProps.match.params.id,
  goal: state.entities.goals[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
  fetchGoals: () => dispatch(fetchGoals()),
  fetchGoal: (goalId) => dispatch(fetchGoal(goalId)),
  clearGoal: (goalId) => dispatch(clearGoal(goalId)),
  changeGoal: (goal) => dispatch(changeGoal(goal))
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalItem);
