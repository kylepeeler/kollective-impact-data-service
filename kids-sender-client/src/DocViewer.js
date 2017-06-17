import React from 'react';
import {BrowserRouter,  Route, Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Component from 'itsa-react-docviewer';
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
    <Component {...props} />
  );
}
}

export default DocViewer;
