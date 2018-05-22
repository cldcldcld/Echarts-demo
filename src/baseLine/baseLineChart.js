import React, { Component } from 'react';
import echarts from 'echarts';
import './baseLineChart.css'

class baseLineChart extends Component {
  render() {
    return (
      <div className='baseLineChart'>
        <div id='baseLineChart'></div>
      </div>
    );
  }

  componentDidMount() {

    var myChart = echarts.init(document.getElementById('baseLineChart'));

    myChart.setOption({
      xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
      }]     
    });

  }
}

export default baseLineChart;
