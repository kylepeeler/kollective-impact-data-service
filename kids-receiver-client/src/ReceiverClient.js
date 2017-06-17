import React, { Component } from 'react';
import {BrowserRouter,  Route, Link} from 'react-router-dom';

import AppNav from './AppNav';
import logo from './logo.svg';
import './App.css';

import DocumentUploader from './components/DocumentUploader'
import Dashboard from './components/Dashboard';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class ReceiverClient extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <AppNav>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/docs" component={DocumentUploader}/>
          </AppNav>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default ReceiverClient;
