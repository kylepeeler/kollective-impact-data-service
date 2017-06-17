import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryGroup, VictoryTheme, VictoryLegend, VictoryContainer } from 'victory';
import Paper from 'material-ui/Paper'

class Chart extends React.Component {
  render(props) {
    var beginning = this.props.environmentData[0]["date"];
    var end = this.props.environmentData[this.props.environmentData.length-1]["date"];
    const chartStyle = {
    }
    return (
          <div style={chartStyle}>
            <VictoryLegend theme={VictoryTheme.material} data={[
                {name: "Environment"},
                {name: "Mood"},
                {name: "Stress"},
                ]}
            />
              <VictoryChart padding={{top: 10, bottom: 10, left: 50, right: 50}} width={300} height={100} theme={VictoryTheme.material}>
                <VictoryAxis  tickValues={[beginning, end]}/>
                <VictoryAxis dependentAxis  tickValues={[1,2,3,4,5]}/>
                <VictoryGroup>
                  <VictoryLine data={this.props.environmentData} x="date" y="environment"/>
                  <VictoryLine data={this.props.moodData} x="date" y="mood"/>
                  <VictoryLine data={this.props.stressData} x="date" y="stress"/>
                </VictoryGroup>
              </VictoryChart>
          </div>
    )
  }
}

export default Chart;
