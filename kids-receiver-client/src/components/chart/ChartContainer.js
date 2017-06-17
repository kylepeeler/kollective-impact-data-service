import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryGroup, VictoryTheme, VictoryLegend } from 'victory';
import Paper from 'material-ui/Paper'
import Chart from './Chart.js'

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
  {date: 1, mood: 2},
  {date: 2, mood: 2},
  {date: 3, mood: 5},
  {date: 4, mood: 1},
  {date: 5, mood: 2},
  {date: 6, mood: 3},
  {date: 7, mood: 1},
  {date: 8, mood: 4},
  {date: 9, mood: 3},
  {date: 10, mood: 5},
  {date: 11, mood: 1},
  {date: 12, mood: 2},
];

const stressData = [
  {date: 1, stress: 1},
  {date: 2, stress: 3},
  {date: 3, stress: 3},
  {date: 4, stress: 2},
  {date: 5, stress: 4},
  {date: 6, stress: 1},
  {date: 7, stress: 4},
  {date: 8, stress: 3},
  {date: 9, stress: 2},
  {date: 10, stress: 1},
  {date: 11, stress: 1},
  {date: 12, stress: 5},
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
    var beginning = environmentData[0]["date"];
    var end = environmentData[environmentData.length-1]["date"];
    return (
      <div>
        <h2>Metrics</h2>
        <Chart
          environmentData = {environmentData}
          moodData = {moodData}
          stressData = {stressData}
        />
      </div>
    )
  }
}

export default ChartContainer;
