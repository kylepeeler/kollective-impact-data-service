import React, { Component } from 'react';

import AppNav from './AppNav';
import logo from './logo.svg';
import './App.css';
import Section from './components/Section'

import {BrowserRouter,  Route, Link} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class ReceiverClient extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <AppNav>
            <div id="section">
            <Section style={{flex:1,marginRight:20,marginLeft:20}}>
              <div>
                <h1>hello world</h1>
              </div>
            </Section>
            <Section style={{flex:1}}>
              <div>
                <h1>hello world</h1>
              </div>
            </Section>
          </div>
            <Route exact path="/" />
          </AppNav>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default ReceiverClient;
