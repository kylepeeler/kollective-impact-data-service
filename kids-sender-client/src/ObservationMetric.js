import React, {Component} from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';


class ObservationMetric extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const styles = {
      group: {
      },
      radioButton: {
        marginTop: 8,
        display: 'inline-block',
        width: 200
      },

    };
    return(
      <div style={{marginBottom: 20}}>
        <span>Rate {this.props.metric}:</span>
        <RadioButtonGroup name={'metric-' + this.props.metric} style={styles.group} onChange={this.props.onChangeRadio}>
          <RadioButton
            value="1"
            label="1"
            style={styles.radioButton}
          />
          <RadioButton
            value="2"
            label="2"
            style={styles.radioButton}
          />
          <RadioButton
            value="3"
            label="3"
            style={styles.radioButton}
          />
          <RadioButton
            value="4"
            label="4"
            style={styles.radioButton}
          />
          <RadioButton
            value="5"
            label="5"
            style={styles.radioButton}
          />
        </RadioButtonGroup>
        <TextField
          floatingLabelText={this.props.metric + ' Comments'}
          style={{width: '100%'}}
          onChange={this.props.onChangeComments}
        />
      </div>
    );
  }
}

export default ObservationMetric;