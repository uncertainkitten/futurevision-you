import React from 'react';
import GoalIndexItem from './goal_index_item';
import NewGoalContainer from './new_goal_container';

class GoalIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formToggle: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.fetchGoals();
  }

  handleClick(){
    this.setState({formToggle: !this.state.formToggle});
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

    let form = "";
    if (this.state.formToggle){
      form = <NewGoalContainer toggleNewForm={this.handleClick}/>
    }

    return(
      <div className="goal-index-container">
        <ul className="goal-index-list">{goals}</ul>
        <button className="new-goal-btn" onClick={this.handleClick}>Create New Goal</button>
        {form}
      </div>
    );
  }
}

export default GoalIndex;