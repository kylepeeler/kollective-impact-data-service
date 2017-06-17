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
import MapsLocalHospital from 'material-ui/svg-icons/maps/local-hospital';
import SocialPerson from 'material-ui/svg-icons/social/person';
import SocialSchool from 'material-ui/svg-icons/social/school';
import Paper from 'material-ui/Paper';
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
          "uploader": "Kyle Peeler",
          "timestamp": "1497715391",
          "description": "Birth certificate sample",
          "category": "personal"
        },
        {
          "title": "Social Security Card",
          "src": "https://www.ssa.gov/pubs/EN-05-10002.pdf",
          "uploader": "Jake White",
          "timestamp": "1497715391",
          "description": "SSN sample",
          "category": "personal"
        },
        {
          "title": "High School Diploma",
          "src": "https://www.in.gov/icc/files/Core_40_and_Honors_Diploma_Requirements.pdf",
          "uploader": "Trent Spice",
          "timestamp": "1497715391",
          "description": "Education sample",
          "category": "education"
        },
        {
          "title": "Medical Records",
          "src": "http://www.miec.com/portals/0/pubs/medicalrec.pdf",
          "uploader": "Andy Harris",
          "timestamp": "1497715391",
          "description": "Medical sample",
          "category": "medical"
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

epochToDate(seconds) {
  var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
  d.setUTCSeconds(seconds);
  return d;
}

render(){
  const documentViewerStyle = {
    height: 400
  }
  const icons = {
    "personal": (<SocialPerson />),
    "education": (<SocialSchool />),
    "medical": (<MapsLocalHospital />)
  }
  const props = {
    allowFullScreen: true,
    src: this.state.files[this.state.currentFileOpen].src,
    className: 'document-viewer'
  };

    const listStyle = {
      width: '30%',
      padding: 20,
      float: 'left'
    };
    const docStyle = {
      width: '70%',
      padding: 20,
      float: 'right'
    };
const FileListItems = this.state.files.map((file, index) =>
  <ListItem
  src={this.state.files[index].src}
  key={index}
  leftAvatar={<Avatar icon={icons[this.state.files[index].category]}/>}
  primaryText={this.state.files[index].title}
  secondaryText={this.state.files[index].description + ', Uploaded By: ' + this.state.files[index].uploader}
  onClick={(e) => this.showDocument(e, index)}
/>)

  return (
    <div>
      <Paper zDepth={2} style={listStyle}>
        <List className="document-list">
        </List>
        <Divider inset={true} />
        <List>
          <Subheader inset={true}>Files</Subheader>
          {FileListItems}
        </List>
      </Paper>
      <Paper zDepth={2} style={docStyle}>
        <div style={listStyle}>
          <h2>{this.state.files[this.state.currentFileOpen].title}</h2>
          <p>{"Uploaded on: " + this.epochToDate(this.state.files[this.state.currentFileOpen].timestamp)}</p>
          <p>{"By: " + this.state.files[this.state.currentFileOpen].uploader}</p>
          <p>{"Description: " + this.state.files[this.state.currentFileOpen].description}</p>

        </div>
        <Component  {...props} />
      </Paper>

    </div>
  );
}
}

export default DocViewer;
