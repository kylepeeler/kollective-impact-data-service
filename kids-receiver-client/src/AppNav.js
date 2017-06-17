import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import Assessment from 'material-ui/svg-icons/action/assessment';
import NextWeek from 'material-ui/svg-icons/content/next-week';
import InsertDriveFile from 'material-ui/svg-icons/editor/insert-drive-file';
import Assignment from 'material-ui/svg-icons/action/assignment';


class AppNav extends Component{
  constructor(props){
    super(props);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.state = {
      sidebarOpen: false
    };
    injectTapEventPlugin();

  }

  toggleSidebar(){
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    })
  }

  render(){
    return (
      <div>
        <AppBar
          title="K.I.D.S."
          onLeftIconButtonTouchTap={this.toggleSidebar}
        />
        {this.props.children}
        <Drawer open={this.state.sidebarOpen}>
          <IconButton onTouchTap={this.toggleSidebar}><NavigationClose /></IconButton>
          <MenuItem primaryText="Dashboard" leftIcon={<NextWeek />} />
          <MenuItem primaryText="Documents upload" leftIcon={<InsertDriveFile />} />
        </Drawer>
      </div>
    );
  }
}

export default AppNav;
