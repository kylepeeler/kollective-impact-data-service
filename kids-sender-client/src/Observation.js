import React, {Component} from 'react';
import Paper from 'material-ui/Paper';


class Observation extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const containerStyle = {
      height: 100,
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
        <p>We are in observation.</p>
      </Paper>
    );
  }
}

export default Observation;