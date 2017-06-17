import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';
import Paper from 'material-ui/Paper'


class Chart extends React.Component {
  render(props) {

    const chartStyle = {
      width: '40%',
    }
    var beginning = this.props.data[0]["date"];
    var end = this.props.data[this.props.data.length-1]["date"];
    return (
      <div style={chartStyle}>
        <VictoryChart viewBox = "0, 0, 10%, auto">
          <VictoryAxis tickValues={[beginning, end]}/>
          <VictoryAxis dependentAxis tickValues={[1,2,3,4,5]}/>
          <VictoryLine data={this.props.data} x="date" y="environment"/>
        </VictoryChart>
      </div>
    )
  }
}

export default Chart;
