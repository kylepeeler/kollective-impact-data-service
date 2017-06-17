import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class SectionTitle extends Component {
  constructor(props){
    super(props);
  }
  state = {
    logged: true,
  };
  render() {
    return (
      <div>
        <AppBar
          style={{backgroundColor:"#9E9E9E"}}
          title={this.props.title}
          showMenuIconButton={this.props.showIcon || false}
          iconElementLeft={this.props.iconLeft}
        />
      </div>
    );
  }
}

export default SectionTitle;
