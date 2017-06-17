import React, { Component } from 'react';
import {BrowserRouter,  Route, Link} from 'react-router-dom';
import './App.css';
import AppNav from './AppNav';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DocViewer from './DocViewer';



class SenderClient extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <AppNav>
            <Route exact path="/" />
            <Route path="/docs" component={DocViewer}/>
            {/*<Route path="/mou" component={MOUAgreement}/>*/}
          </AppNav>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default SenderClient;
