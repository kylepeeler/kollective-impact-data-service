import React, {Component} from 'react';
import {BrowserRouter,  Route, Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DocumentViewer as Component from ('itsa-react-docviewer')

class DocViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allowFullScreen: true,
      src: "http://projects.itsasbreuk.nl/react-components/itsa-docviewer/example.pdf"
    }
  }
};

render(){
  return (
    <Component {...props} />
    //document.getElementById("component-container")
  )
}

export default DocViewer;
