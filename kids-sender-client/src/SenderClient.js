import React, { Component } from 'react';
import {BrowserRouter,  Route, Link} from 'react-router-dom';
import './App.css';
import AppNav from './AppNav';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Observation from './Observation';



class SenderClient extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <AppNav>
            <Route exact path="/" component={Observation}/>
            {/*<Route path="/docs" component={DocumentViewer}/>*/}
            {/*<Route path="/mou" component={MOUAgreement}/>*/}
          </AppNav>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default SenderClient;
