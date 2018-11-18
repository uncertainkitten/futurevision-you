import React from 'react';
import GoalItem from './goal_item';

class GoalIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchGoals();
  }

  render(){
    let goals;
    if (this.props.goals.length){
      goals = "No goals found"
    } else {
      goals = this.props.goals.map(goal =>
      <GoalItem
      key={goal.id}
      fetchGoal={this.props.fetchGoal}
      goal={goal}
      />);
    }
    return(
      <div className="goal-index-container">
        <ul className="goal-index-list">{goals}</ul>
      </div>
    );
  }
}

export default GoalIndex;