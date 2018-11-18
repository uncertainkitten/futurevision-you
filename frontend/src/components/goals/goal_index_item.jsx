import React from 'react';
import {Link} from 'react-router-dom';

class GoalIndexItem  extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchGoal(this.props.goal.id)
  }

  render(){
    return(
      <div className="goal-item">
        <li className="goal-item-bullet">
          <h4>{this.props.goal.level}</h4>
          <Link to={`/goals/${this.props.goal.id}`}>{this.props.goal.text}</Link>
          <div className="goal-progress">{this.props.goal.progress}</div>
          <p className="deadline">{this.props.goal.deadline}</p>
        </li>
      </div>
    )
  }
}

export default GoalIndexItem;