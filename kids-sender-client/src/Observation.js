import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import ObservationMetric from './ObservationMetric';
import TextField from 'material-ui/TextField';
import Send from 'material-ui/svg-icons/content/send';
import RaisedButton from 'material-ui/RaisedButton';
import ObservationTime from './ObservationTime';
import * as firebase from 'firebase';



class Observation extends Component{
  constructor(props){
    super(props);
    this.updateEnvironmentScore = this.updateEnvironmentComment.bind(this);
    this.updateEnvironmentComment = this.updateEnvironmentComment.bind(this);
    this.updateMoodScore = this.updateMoodScore.bind(this);
    this.updateMoodComment = this.updateMoodComment.bind(this);
    this.updateStressScore = this.updateStressScore.bind(this);
    this.updateStressComment = this.updateStressComment.bind(this);
    this.updateOverallComment = this.updateOverallComment.bind(this);
    this.updateDuration = this.updateDuration.bind(this);
    this.state = {
      environmentScore: 0,
      environmentComment: "",
      moodScore: 0,
      moodComment: "",
      stressScore: 0,
      stressComment: "",
      overallComment: "",
      duration: ""
    }
  }

  updateEnvironmentScore(event, value){
    this.setState({
      environmentScore: value
    })
  }

  updateEnvironmentComment(event, value){
    this.setState({
      environmentComment: value
    })
  }

  updateMoodScore(event, value){
    this.setState({
      moodScore: value
    })
  }

  updateMoodComment(event, value){
    this.setState({
      moodComment: value
    })
  }

  updateStressScore(event, value){
    this.setState({
      stressScore: value
    })
  }

  updateStressComment(event, value){
    this.setState({
      stressComment: value
    })
  }

  updateOverallComment(event, value){
    this.setState({
      overallComment: value
    })
  }

  updateDuration(event, value){
    this.setState({
      duration: value
    })
  }

  submitToFirebase(){
    console.log('we send state to firebase');
    var newObservationkey = firebase.database().ref().child();
    var updates = {};
    updates[newObservationkey] = this.state;
    firebase.database().ref().push(updates);

  }

  render(){
    const submitButtonStyle={
      marginTop: '20px',
      marginBottom: '20px'
      //float: 'right'
    };

    const title = {
      fontWeight: '300',

    };

    const containerStyle = {
      width: '90%',
      padding: 20,
      display: 'block',
      marginTop: 20,
      marginBottom: 20,
      marginLeft: `auto`,
      marginRight: `auto`
    };
    return(
      <Paper zDepth={2} style={containerStyle}>
        <h1 style={title}>New Observation</h1>
        <ObservationTime onChange={this.updateDuration}/>
        <ObservationMetric metric="Environment" onChangeRadio={this.updateEnvironmentScore} onChangeComments={this.updateEnvironmentComment}/>
        <ObservationMetric metric="Mood" onChangeRadio={this.updateMoodScore} onChangeComments={this.updateMoodComment}/>
        <ObservationMetric metric="Stress" onChangeRadio={this.updateStressScore} onChangeComments={this.updateStressComment}/>
        <TextField
          floatingLabelText="Overall Notes/Comments"
          multiLine={true}
          rows={5}
          style={{width: '100%'}}
          onChange={this.updateOverallComment}
        />
        <RaisedButton label="Submit" primary={true} style={submitButtonStyle} icon={<Send />} labelPosition="before" onClick={this.submitToFirebase}/>
      </Paper>
    );
  }
}

export default Observation;
