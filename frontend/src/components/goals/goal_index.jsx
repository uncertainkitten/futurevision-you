import React from 'react';
import GoalIndexItem from './goal_index_item';

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
      goals = this.props.goals.map(goal =>
        <GoalIndexItem
        key={goal.id}
        fetchGoal={this.props.fetchGoal}
        goal={goal}
        />);
    } else {
      goals = "No goals found"
    }
    return(
      <div className="goal-index-container">
        <ul className="goal-index-list">{goals}</ul>
      </div>
    );
  }
}

export default GoalIndex;