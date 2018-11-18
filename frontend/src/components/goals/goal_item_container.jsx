import {connect} from 'react-redux';
import GoalItem from './goal_item';
import {fetchGoal, clearGoal} from '../../actions/goals_actions';

const mapStateToProps = (state, ownProps) => ({
  goalId: ownProps.match.params.id,
  goal: state.entities.goals[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
  fetchGoal: (goalId) => dispatch(fetchGoal(goalId)),
  clearGoal: (goalId) => dispatch(clearGoal(goalId))
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalItem);
