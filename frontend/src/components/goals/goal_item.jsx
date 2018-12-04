import React from 'react';
import GoalIndexItem from './goal_index_item';
import EditGoalContainer from './edit_goal_container';
import {withRouter, Link} from 'react-router-dom';

class GoalItem  extends React.Component {
  constructor(props){
    super(props);
    this.state = {isLoading: true, editing: false}
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.props.fetchGoals()
    .then(res => this.props.fetchGoal(this.props.goalId)
    .then(res => this.setState({isLoading: false})));
  }

  handleEdit(){
    this.setState({editing: !this.state.editing})
  }

  handleDelete(){
    this.props.clearGoal(this.props.goalId)
    .then(res => this.props.history.push('/goals'));
  }

  render(){
    if (this.state.isLoading){
      return(<div className="loading"><p>Loading. . .</p></div>);
    } else if (!this.props.goal) {
      return(<div className="four-oh-four">
        <p>There must be some mistake - there's no future here!</p>
        <Link to="/goals">Back to Index</Link>
      </div>);
    } else {
      let subcomponent;
      if (this.props.goal.level === "Future Vision"){
        subcomponent = this.props.goal.steps.map(step =>
        <GoalIndexItem
        key={step.id}
        goal={step}
        fetchGoal={this.props.fetchGoal}/>);
      } else {
        let future = this.props.goal.future_vision;
        subcomponent = <GoalIndexItem key={future.id} goal={future} fetchGoal={this.props.fetchGoal}/>
      }

      let editForm;
      if(this.state.editing){
        editForm = <EditGoalContainer goalId={this.props.goalId} toggleEdit={this.handleEdit}/>
      }

      return(
        <div className="goal-item">
          <h3>{this.props.goal.level}</h3>
          <p>{this.props.goal.text}</p>
          <div className="goal-progress">{this.props.goal.progress}</div>
          <p className="deadline">{this.props.goal.deadline}</p>
          <div className="completion">Completed? {`${this.props.goal.completed}`}</div>
          <div className="buttonGoalDiv">
            <button className="deleteBtn" onClick={this.handleDelete}>Delete this Goal</button>
            <button className="deleteBtn" onClick={this.handleEdit}>Edit this Goal</button>
          </div>
          <ul className="subgoals">{subcomponent}</ul>
          <Link to="/goals">Back to Index</Link>
          {editForm}
        </div>
      )
    }
  }
}

export default withRouter(GoalItem);