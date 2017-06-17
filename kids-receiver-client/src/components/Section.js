import Paper from 'material-ui/Paper';
import '../App.css';
import React, { Component } from 'react';

class Section extends Component {
  render() {
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
    return (
      <Paper zDepth={2} style={this.props.style}>
        {this.props.children}
      </Paper>
    );
  }
}

export default Section;
