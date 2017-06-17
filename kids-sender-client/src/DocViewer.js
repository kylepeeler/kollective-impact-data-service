import React from 'react';
import {BrowserRouter,  Route, Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Component from 'itsa-react-docviewer';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import FileFolder from 'material-ui/svg-icons/file/folder';
import EditorInsertDriveFile from 'material-ui/svg-icons/editor/insert-drive-file';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import './DocViewer.css'

class DocViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: {
        
      }

    }
    console.log(this.state.files);
  }

render(){
  const documentViewerStyle = {
    height: 400
  }
  const props = {
    allowFullScreen: true,
    src: "http://projects.itsasbreuk.nl/react-components/itsa-docviewer/example.pdf",
    className: 'document-viewer'
  };
  return (
    <div>
      <List className="document-list">
      </List>
      <Divider inset={true} />
      <List>
        <Subheader inset={true}>Files</Subheader>
        <ListItem
          leftAvatar={<Avatar icon={<EditorInsertDriveFile />}/>}
          rightIcon={<ActionInfo />}
          primaryText="Vacation itinerary"
          secondaryText="Jan 20, 2014"
        />
        <ListItem
          leftAvatar={<Avatar icon={<EditorInsertDriveFile />}/>}
          rightIcon={<ActionInfo />}
          primaryText="Kitchen remodel"
          secondaryText="Jan 10, 2014"
        />
      </List>

      <Component {...props} />
    </div>
  );
}
}

export default DocViewer;
