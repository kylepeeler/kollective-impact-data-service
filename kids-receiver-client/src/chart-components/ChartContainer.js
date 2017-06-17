import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';
import Paper from 'material-ui/Paper'
import LineChart from './LineChart'

const environmentData = [
  {date: 1, environment: 3},
  {date: 2, environment: 4},
  {date: 3, environment: 3},
  {date: 4, environment: 3},
  {date: 5, environment: 5},
  {date: 6, environment: 2},
  {date: 7, environment: 4},
  {date: 8, environment: 1},
  {date: 9, environment: 1},
  {date: 10, environment: 3},
  {date: 11, environment: 2},
  {date: 12, environment: 4},
];

const moodData = [
  {date: 1, environment: 3},
  {date: 2, environment: 4},
  {date: 3, environment: 3},
  {date: 4, environment: 3},
  {date: 5, environment: 5},
  {date: 6, environment: 2},
  {date: 7, environment: 4},
  {date: 8, environment: 1},
  {date: 9, environment: 1},
  {date: 10, environment: 3},
  {date: 11, environment: 2},
  {date: 12, environment: 4},
];

const stressData = [
  {date: 1, environment: 3},
  {date: 2, environment: 4},
  {date: 3, environment: 3},
  {date: 4, environment: 3},
  {date: 5, environment: 5},
  {date: 6, environment: 2},
  {date: 7, environment: 4},
  {date: 8, environment: 1},
  {date: 9, environment: 1},
  {date: 10, environment: 3},
  {date: 11, environment: 2},
  {date: 12, environment: 4},
];



class ChartContainer extends React.Component {

  render(props) {
    const containerStyle = {
      width: '90%',
      padding: 20,
      display: 'block',
      marginTop: 20,
      marginBottom: 20,
      marginLeft: `auto`,
      marginRight: `auto`
    };
    const chartStyle = {
      width: '40%',
    }
    return (
      <Paper zDepth={2} style={containerStyle}>
        <h3>Environment</h3>
        <LineChart data={environmentData}/>
        <h3>Stress</h3>
        <LineChart data={stressData}/>
        <h3>Mood</h3>
        <LineChart data={moodData}/>
      </Paper>
    )
  }
}

export default ChartContainer;
