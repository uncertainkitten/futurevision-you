import {connect} from 'react-redux';
import GoalForm from './goal_form';
import {fetchGoal, changeGoal} from '../../actions/goals_actions';

const mapStateToProps = (state, ownProps) => ({
  goalId: ownProps.match.params.id,
  goal: state.entities.goals[ownProps.match.params.id],
  formType: "Edit Goal",
  errors: state.errors.goals
});

const mapDispatchToProps = dispatch => ({
  fetchGoal: (goalId) => dispatch(fetchGoal(goalId)),
  processForm: (goal) => dispatch(changeGoal(goal))
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalForm);