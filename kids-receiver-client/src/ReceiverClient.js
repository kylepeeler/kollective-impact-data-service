import React, { Component } from 'react';
import {BrowserRouter,  Route, Link} from 'react-router-dom';
import Login from './Login';
import * as firebase from 'firebase';
import Database from './Database';

import AppNav from './AppNav';
import logo from './logo.svg';
import './App.css';

import DocumentUploader from './components/DocumentUploader'
import Dashboard from './components/Dashboard';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class ReceiverClient extends Component {
  constructor(props) {
    super(props);
    this.setInitialView = this.setInitialView.bind(this);
    Database.init();
    this.setInitialView();
    this.state = {
      loaded: false,
      initialView: null
    }
  }
  setInitialView(){
    firebase.auth().onAuthStateChanged((user)=>{
      let initialView = user ? Dashboard : Login;
      this.setState({
        initialView: initialView
      })
    })
  }
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <AppNav>
            <Route exact path="/" component={this.state.initialView}/>
            <Route path="/Dashboard" component={this.state.initialView != Login ? Dashboard : Login}/>
            <Route path="/docs" component={this.state.initialView != Login ? DocumentUploader : Login}/>
            <Route path="/login" component={Login}/>
          </AppNav>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }

  getInitialView(){
    //<Route path="/login" component={Login}/>
    firebase.auth().onAuthStateChange((user)=> {
      let initialView = user ? "/":"login";
      this.setState({
        loaded: true,
        initialView: initialView
      })
    });
  }
}

export default ReceiverClient;
