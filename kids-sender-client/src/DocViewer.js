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
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import './DocViewer.css'

class DocViewer extends React.Component {
  constructor(props) {
    super(props);
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
        <Subheader inset={true}>Folders</Subheader>
        <ListItem
          leftAvatar={<Avatar icon={<FileFolder />} />}
          rightIcon={<ActionInfo />}
          primaryText="Photos"
          secondaryText="Jan 9, 2014"
        />
        <ListItem
          leftAvatar={<Avatar icon={<FileFolder />} />}
          rightIcon={<ActionInfo />}
          primaryText="Recipes"
          secondaryText="Jan 17, 2014"
        />
        <ListItem
          leftAvatar={<Avatar icon={<FileFolder />} />}
          rightIcon={<ActionInfo />}
          primaryText="Work"
          secondaryText="Jan 28, 2014"
        />
      </List>
      <Divider inset={true} />
      <List>
        <Subheader inset={true}>Files</Subheader>
        <ListItem
          leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
          rightIcon={<ActionInfo />}
          primaryText="Vacation itinerary"
          secondaryText="Jan 20, 2014"
        />
        <ListItem
          leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
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
