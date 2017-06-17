import React, {Component} from 'react';
import TextField from 'material-ui/TextField';


class ObservationTime extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div style={{display: 'inline-block', marginBottom: 20}}>
          <TextField
            type="number"
            floatingLabelText="Observation Time (in hours)"
            onChange={this.props.onChange}
          />
        </div>
        <br/>
      </div>
    );
  }
}

export default ObservationTime;