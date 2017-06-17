import React, { Component } from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class Table extends Component {
  return(){
    render(
      <TableRow>
        <TableRowColumn>{this.props.date}</TableRowColumn>
        <TableRowColumn>t{his.props.timespent}</TableRowColumn>
        <TableRowColumn>{this.props.stress}</TableRowColumn>
        <TableRowColumn>{this.props.mood}</TableRowColumn>
        <TableRowColumn>{this.props.enviroment}</TableRowColumn>
        <TableRowColumn>{this.props.observation}</TableRowColumn>
      </TableRow>
    );
  }
}
