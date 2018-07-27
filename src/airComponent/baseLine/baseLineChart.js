import React, { Component } from 'react';
import echarts from 'echarts';
// import './baseLineChart.css'

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
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLine: {
              lineStyle: {
                  color: 'white'
              }
          }
      },
      yAxis: {
          type: 'value',
          axisLine: {
              lineStyle: {
                  color: 'white'
              }
          }
      },
      series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
      }]     
    });

    setTimeout(function(){
      myChart.resize();
    }, 10)

  }
}

export default baseLineChart;
