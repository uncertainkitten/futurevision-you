import {connect} from 'react-redux';
import GoalIndex from './goal_index';
import {fetchGoals, fetchGoal} from '../../actions/goals_actions';

const mapStateToProps = state => ({
  goals: Object.values(state.entities.goals)
});

const mapDispatchToProps = dispatch => ({
  fetchGoals: () => dispatch(fetchGoals()),
  fetchGoal: (goalId) => dispatch(fetchGoal(goalId))
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalIndex);
