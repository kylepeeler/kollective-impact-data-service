import React, { Component } from 'react';
import {BrowserRouter,  Route, Link} from 'react-router-dom';

import AppNav from './AppNav';
import logo from './logo.svg';
import './App.css';

import DocumentUploader from './components/DocumentUploader'
import Dashboard from './components/Dashboard';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class ReceiverClient extends Component {
  constructor(props){
    super(props);
    // id in both message and entries refer to a instance of a row
    this.state ={
      observation: [
    {
      "enviornmentScore": 1,
      "enviornmentComment": "Mauris lacinia sapien quis libero.",
      "moodScore": 4,
      "moodComment": "Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      "stressScore": 4,
      "stressComment": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "overallComment": "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
      "duration": 2.5,
      "timestamp": "1483921307"
    },
    {
      "enviornmentScore": 3,
      "enviornmentComment": "Sample Enviornment Comment.",
      "moodScore": 5,
      "moodComment": "Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      "stressScore": 5,
      "stressComment": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "overallComment": "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
      "duration": 2.5,
      "timestamp": "1483921307"
    },
    ]
    }
  }
   componentDidMount() {

   }
   
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
