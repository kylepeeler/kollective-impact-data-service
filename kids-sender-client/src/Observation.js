import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import ObservationMetric from './ObservationMetric';
import TextField from 'material-ui/TextField';
import Send from 'material-ui/svg-icons/content/send';
import RaisedButton from 'material-ui/RaisedButton';




class Observation extends Component{
  constructor(props){
    super(props);
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
        <ObservationMetric metric="Environment"/>
        <ObservationMetric metric="Mood"/>
        <ObservationMetric metric="Stress"/>
        <TextField
          floatingLabelText="Overall Notes/Comments"
          multiLine={true}
          rows={5}
          style={{width: '100%'}}
        />
        <RaisedButton label="Submit" primary={true} style={submitButtonStyle} icon={<Send />} labelPosition="before"/>
      </Paper>
    );
  }
}

export default Observation;