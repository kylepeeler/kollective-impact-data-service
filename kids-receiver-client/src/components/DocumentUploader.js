import React from 'react';
import Paper from 'material-ui/Paper'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import Send from 'material-ui/svg-icons/content/send';

import RaisedButton from 'material-ui/RaisedButton';


class DocumentUploader extends React.Component {
  render() {
    const styles = {
     group: {
     },
     radioButton: {
       marginTop: 8,
       display: 'inline-block',
       width: 200
     },

   };
   const submitButtonStyle={
      marginTop: '20px',
      marginBottom: '20px'
      //float: 'right'
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
    return (
        <div style={containerStyle}>
          <Paper zDepth={2}>
            <h2>Document Uploader</h2>
            <TextField placeholder="Title"></TextField><br/>
            <TextField placeholder="Uploader Name"></TextField><br/>
            <TextField placeholder="URL"></TextField><br/>
            <RadioButtonGroup name={'metric-' + this.props.metric} style={styles.group}>
              <RadioButton
                value="personal"
                label="Personal"
                style={styles.radioButton}
              />
              <RadioButton
                value="education"
                label="Education"
                style={styles.radioButton}
              />
              <RadioButton
                value="medical"
                label="Medical"
                style={styles.radioButton}
              />
              <RadioButton
                value="miscellaneous"
                label="Miscellaneous"
                style={styles.radioButton}
              />
            </RadioButtonGroup>
            <RaisedButton label="Submit" primary={true} style={submitButtonStyle} icon={<Send />} labelPosition="before"/>

          </Paper>
        </div>
    )
  }
}

export default DocumentUploader;
