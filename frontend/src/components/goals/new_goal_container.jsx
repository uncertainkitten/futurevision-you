import {connect} from 'react-redux';
import GoalForm from './goal_form';
import {createGoal} from '../../actions/goals_actions';
import {futureVisionGoggles} from '../../reducers/selectors';

const mapStateToProps = state => ({
  formType: "New Goal",
  errors: state.errors.goals,
  futureVisions: futureVisionGoggles(state)
});

const mapDispatchToProps = dispatch => ({
  processForm: (goal) => dispatch(createGoal(goal))
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalForm);