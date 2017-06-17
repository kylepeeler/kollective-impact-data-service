import React, { Component } from 'react';

import AppNav from './AppNav';
import logo from './logo.svg';
import './App.css';
import Section from './components/Section'
import SectionTitle from './components/SectionTitle'

import {BrowserRouter,  Route, Link} from 'react-router-dom';

import Refresh from 'material-ui/svg-icons/navigation/refresh';
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
import ChartContainer from './chart-components/ChartContainer.js'
class ReceiverClient extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <AppNav>
          <ChartContainer/>
            <div id="section">
            <Section style={{flex:1,marginRight:20,marginLeft:20, marginTop: 10,minHeight:300,}}>
              <div>
                <SectionTitle title={"hello world"}/>
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
              <SectionTitle title={"Last environment Conditon"} showIcon={true} iconLeft={<IconButton><Refresh /></IconButton>}/>
              <h1 className="avg-data">Clean</h1>
            </Section>
          </div>
          <div id="section">
            <Section style={{flex:1,marginTop: 10,minHeight:300, marginRight:20 ,marginLeft: 20}}>
              <Table>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn>Date</TableHeaderColumn>
                    <TableHeaderColumn>Stress</TableHeaderColumn>
                    <TableHeaderColumn>Mood</TableHeaderColumn>
                    <TableHeaderColumn>Enviroment</TableHeaderColumn>
                    <TableHeaderColumn>Notes/Observation</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  <TableRow>
                    <TableRowColumn>4/1/14</TableRowColumn>
                    <TableRowColumn>4</TableRowColumn>
                    <TableRowColumn>2</TableRowColumn>
                    <TableRowColumn>clean</TableRowColumn>
                    <TableRowColumn>need to finish</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>4/1/14</TableRowColumn>
                    <TableRowColumn>4</TableRowColumn>
                    <TableRowColumn>2</TableRowColumn>
                    <TableRowColumn>clean</TableRowColumn>
                    <TableRowColumn>need to finish</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>4/1/14</TableRowColumn>
                    <TableRowColumn>4</TableRowColumn>
                    <TableRowColumn>2</TableRowColumn>
                    <TableRowColumn>clean</TableRowColumn>
                    <TableRowColumn>need to finish</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>4/1/14</TableRowColumn>
                    <TableRowColumn>4</TableRowColumn>
                    <TableRowColumn>2</TableRowColumn>
                    <TableRowColumn>clean</TableRowColumn>
                    <TableRowColumn>need to finish</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>4/1/14</TableRowColumn>
                    <TableRowColumn>4</TableRowColumn>
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
