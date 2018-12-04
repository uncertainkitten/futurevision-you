import React from 'react';
import Datetime from 'react-datetime';
import Dropdown from 'react-dropdown';
import {withRouter} from 'react-router-dom';
import 'react-dropdown/style.css';


class GoalForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      deadline: new Date(),
      text: "",
      level: "",
      progress: 0,
      future_vision_id: "",
      futureVision: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    if (this.props.formType === "Edit Goal"){
      this.props.fetchGoal(this.props.goalId);
      this.setState({
        deadline: this.props.goal.deadline,
        text: this.props.goal.text,
        level: this.props.goal.level,
        progress: this.props.goal.progress,
      });
      if (this.props.goal.future_vision.id){
        this.setState({future_vision_id: this.props.goal.future_vision.id});
      }
    }
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  updateCalendar(date){
    this.setState({deadline: date});
  }

  updateLevel(level){
    this.setState({level: level.value});
  }

  updateFutureVision(futureVision){
    this.setState({future_vision_id: futureVision.value, futureVision: futureVision.label})
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.props.future_vision){
      this.setState({future_vision_id: this.props.future_vision});
    }
    if (this.props.formType === "Edit Goal"){
      let editForm = {};
      Object.assign(editForm, this.state);
      editForm.id = this.props.goalId;
      this.props.processForm(editForm);
      this.props.toggleEdit();
    } else{
      this.props.processForm(this.state);
      this.props.toggleNewForm();
    }

  }

  render(){
    let yesterday = Datetime.moment().subtract( 1, 'day' );
    let valid = function( current ){
      return current.isAfter( yesterday );
    };
    const options = ["Future Vision", "Monthly", "Weekly", "Daily"];

    let futureOptions = this.props.futureVisions.map(fV => {
      let optject = {value: fV.id, label: fV.text};
      return optject;
    });
    let futureDrop;

    if(this.state.level !== "Future Vision"){
      futureDrop = <label className="future-vision-label">
      Future Vision
      <Dropdown
        options={futureOptions}
        onChange={futureVision => this.updateFutureVision(futureVision)}
        value={this.state.future_vision_id}
        label={this.state.futureVision}
        placeholder="Select an Option"
      />
    </label>
    }

    return(
      <div className="goal-form-container">
        <h2 className="goal-form-type">{this.props.formType}</h2>
          <div className="goal-form-outer">
            <ul className="goal-error-list">{this.props.errors}</ul>

            <form className="goal-form" onSubmit={this.handleSubmit}>
              <label className="goal-text-label">
                Text
                <input
                className="goalText"
                type="text"
                value={this.state.text}
                onChange={this.update("text")} />
              </label>

              <label className="goal-level-label">
                Level
                <Dropdown
                  options={options}
                  onChange={level => this.updateLevel(level)}
                  value={this.state.level}
                  placeholder="Select an Option"
                />
              </label>
              {futureDrop}

              <label className="goal-deadline-label">
                Deadline
                <Datetime
                value={this.state.deadline}
                onChange={date => this.updateCalendar(date)}
                closeOnSelect={true}
                timeFormat={false}
                isValidDate={valid}
                />
              </label>

              <input className="goal-form-btn" type="submit" value={this.props.formType} />
            </form>
          </div>
      </div>
    );
  }
}

export default withRouter(GoalForm);