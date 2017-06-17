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
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase';


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

  async logoutuser(){
  try{
    await firebase.auth().signOut();
  }catch(e){
    console.log(e);
  }
  this.toggleSidebar();
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
          <Link to="/" style={{textDecoration: 'none'}} onClick={this.toggleSidebar}>
          <MenuItem primaryText="Dashboard" leftIcon={<NextWeek />} />
          </Link>
          <Link to="/docs" style={{textDecoration: 'none'}} onClick={this.toggleSidebar}>
          <MenuItem primaryText="Documents upload" leftIcon={<InsertDriveFile />} />
          </Link>
          <MenuItem primaryText="Log Out" leftIcon={<ExitToApp />}  onClick={this.logoutuser}/>
        </Drawer>
      </div>
    );
  }
}

export default AppNav;
