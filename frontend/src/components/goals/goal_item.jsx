import React from 'react';
import GoalIndexItem from './goal_index_item';
import {withRouter} from 'react-router-dom';

class GoalItem  extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchGoal(this.props.goalId)
  }

  render(){
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
    return(
      <div className="goal-item">
        <h3>{this.props.goal.level}</h3>
        <p>{this.props.goal.text}</p>
        <div className="goal-progress">{this.props.goal.progress}</div>
        <p className="deadline">{this.props.goal.deadline}</p>
        <div className="completion">Completed? {`${this.props.goal.completed}`}</div>
        <ul className="subgoals">{subcomponent}</ul>
      </div>
    )
  }
}

export default withRouter(GoalItem);