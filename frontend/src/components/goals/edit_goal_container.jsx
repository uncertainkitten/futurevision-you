import {connect} from 'react-redux';
import GoalForm from './goal_form';
import {fetchGoal, changeGoal} from '../../actions/goals_actions';
import {futureVisionGoggles} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  goalId: ownProps.goalId,
  goal: state.entities.goals[ownProps.goalId],
  formType: "Edit Goal",
  errors: state.errors.goals,
  futureVisions: futureVisionGoggles(state)
});

const mapDispatchToProps = (dispatch, ownProps)=> ({
  fetchGoal: (goalId) => dispatch(fetchGoal(goalId)),
  processForm: (goal) => dispatch(changeGoal(goal))
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalForm);