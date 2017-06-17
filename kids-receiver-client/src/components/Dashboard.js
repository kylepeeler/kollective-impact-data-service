import React from 'react';
import Refresh from 'material-ui/svg-icons/navigation/refresh';
import IconButton from 'material-ui/IconButton';
import Section from './Section'
import SectionTitle from './SectionTitle'
import ChartContainer from './chart/ChartContainer'


import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default Dashboard;
