import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,  Route, Link} from 'react-router-dom';
import AppNav from './AppNav';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class ReceiverClient extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <AppNav>
            <Route exact path="/" />
            {/*<Route path="/docs" component={DocumentViewer}/>*/}
            {/*<Route path="/mou" component={MOUAgreement}/>*/}
          </AppNav>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default ReceiverClient;
