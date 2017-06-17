import React, { Component } from 'react';

import AppNav from './AppNav';
import logo from './logo.svg';
import './App.css';
import Section from './components/Section'
import SectionTitle from './components/SectionTitle'
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';

import {BrowserRouter,  Route, Link} from 'react-router-dom';

import Refresh from 'material-ui/svg-icons/navigation/refresh';
import Messsage from 'material-ui/svg-icons/communication/chat-bubble-outline';
import IconButton from 'material-ui/IconButton';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ChartContainer from './components/chart/ChartContainer'
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
            <div id="section">
            <Section style={{flex:1,marginRight:20,marginLeft:20, marginTop: 10,paddingLeft:20,minHeight:300,}}>
              <div>
              <ChartContainer/>
              </div>
            </Section>
          </div>

          <div id="section">
            <Section style={{flex:1,marginTop: 10,minHeight:300, marginLeft: 20}}>
              <SectionTitle title={"Average stress"} showIcon={true} iconLeft={<IconButton><Refresh /></IconButton>}/>
              <h1 className="avg-data"> 3.4</h1>
            </Section>
            <Section style={{flex:1,marginTop: 10,minHeight:300, marginRight:20 ,marginLeft: 20}}>
              <SectionTitle title={"Average mood"}showIcon={true} iconLeft={<IconButton><Refresh /></IconButton>}/>
              <h1 className="avg-data">4.9</h1>
            </Section>
            <Section style={{flex:1,marginTop: 10,minHeight:300, marginRight:20}}>
              <SectionTitle title={"Average time spent"} showIcon={true} iconLeft={<IconButton><Refresh /></IconButton>}/>
              <h1 className="avg-data">30 mins</h1>
            </Section>
          </div>
          <div id="section">
            <Section style={{flex:1,marginTop: 10,minHeight:300, marginRight:20 ,marginLeft: 20}}>
              <Table>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn>Date</TableHeaderColumn>
                    <TableHeaderColumn>Time Spent</TableHeaderColumn>
                    <TableHeaderColumn>Stress</TableHeaderColumn>
                    <TableHeaderColumn>Mood</TableHeaderColumn>
                    <TableHeaderColumn>Enviroment</TableHeaderColumn>
                    <TableHeaderColumn>Notes/Observation</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  <TableRow>
                    <TableRowColumn>4/1/14</TableRowColumn>
                    <TableRowColumn>4
                      <IconMenu
                      iconButtonElement={<IconButton><Messsage /></IconButton>}
                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                      targetOrigin={{horizontal: 'right', vertical: 'top'}}>

                        <SectionTitle title={"Comment"} />
                        <p>
                          <b>Josh Martin</b> : I hope you can become more relaxed
                        </p>

                      </IconMenu>
                    </TableRowColumn>
                    <TableRowColumn>0:30</TableRowColumn>
                    <TableRowColumn>2 </TableRowColumn>
                    <TableRowColumn>clean </TableRowColumn>
                    <TableRowColumn>need to finish </TableRowColumn>
                  </TableRow>

                  <TableRow>
                    <TableRowColumn>4/1/14</TableRowColumn>
                    <TableRowColumn>4</TableRowColumn>
                    <TableRowColumn>0:30</TableRowColumn>
                    <TableRowColumn>2</TableRowColumn>
                    <TableRowColumn>clean</TableRowColumn>
                    <TableRowColumn>need to finish</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>4/1/14</TableRowColumn>
                    <TableRowColumn>4</TableRowColumn>
                    <TableRowColumn>0:30</TableRowColumn>
                    <TableRowColumn>2</TableRowColumn>
                    <TableRowColumn>clean</TableRowColumn>
                    <TableRowColumn>need to finish</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>4/1/14</TableRowColumn>
                    <TableRowColumn>4</TableRowColumn>
                    <TableRowColumn>0:30</TableRowColumn>
                    <TableRowColumn>2</TableRowColumn>
                    <TableRowColumn>clean</TableRowColumn>
                    <TableRowColumn>need to finish</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
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
