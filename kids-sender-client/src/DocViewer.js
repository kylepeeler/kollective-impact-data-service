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
    this.showDocument = this.showDocument.bind(this);
    this.state = {
      currentFileOpen: 0,
      files: [
        {
          "title": "Birth Certificate",
          "src": "http://dhss.delaware.gov/dph/ss/files/birth.pdf",
          "uploader": "John Smith",
          "timestamp": "1497715391",
          "description": "birth certificate sample"
        },
        {
          "title": "Social Security Card",
          "src": "https://www.ssa.gov/pubs/EN-05-10002.pdf",
          "uploader": "John Smith",
          "timestamp": "1497715391",
          "description": "ssn sample"
        }
      ]
    }
    console.log(this.state.files);
  }

showDocument(e, index){
  this.setState({
    currentFileOpen: index
  });
}

render(){
  const documentViewerStyle = {
    height: 400
  }
  const props = {
    allowFullScreen: true,
    src: this.state.files[this.state.currentFileOpen].src,
    className: 'document-viewer'
  };
const FileListItems = this.state.files.map((file, index) =>
  <ListItem
  src={this.state.files[index].src}
  key={index}
  leftAvatar={<Avatar icon={<EditorInsertDriveFile />}/>}
  rightIcon={<ActionInfo />}
  primaryText={this.state.files[index].title}
  secondaryText={this.state.files[index].description + ', Uploaded By: ' + this.state.files[index].uploader}
  onClick={(e) => this.showDocument(e, index)}
/>)

  return (
    <div>
      <List className="document-list">
      </List>
      <Divider inset={true} />
      <List>
        <Subheader inset={true}>Files</Subheader>
        {FileListItems}
      </List>

      <Component {...props} />
    </div>
  );
}
}

export default DocViewer;
