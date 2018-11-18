import {connect} from 'react-redux';
import GoalForm from './goal_form';
import {createGoal} from '../../actions/goals_actions';

const mapStateToProps = state => ({
  formType: "New Goal",
  errors: state.errors.goals
});

const mapDispatchToProps = dispatch => ({
  processForm: (goal) => dispatch(createGoal(goal))
})

export default connect(null, mapDispatchToProps)(GoalForm);