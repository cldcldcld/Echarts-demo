import React, { Component } from 'react';
import echarts from 'echarts';
import './radarChart.css'

class radarChart extends Component {
  render() {
    return (
      <div className='radarChart'>
        <div id='radarChart'></div>
      </div>
    );
  }

  componentDidMount() {

    var myChart = echarts.init(document.getElementById('radarChart'));

    myChart.setOption({
      angleAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          z: 10,
          axisLabel: {
            color: 'white'
          }
      },
      radiusAxis: {
          axisLine: {
              lineStyle: {
                  color: 'white'
              }
          }
      },
      polar: {
      },
      series: [{
          type: 'bar',
          data: [1, 2, 3, 4, 3, 5, 1],
          coordinateSystem: 'polar',
          name: 'A',
          stack: 'a'
      }, {
          type: 'bar',
          data: [2, 4, 6, 1, 3, 2, 1],
          coordinateSystem: 'polar',
          name: 'B',
          stack: 'a'
      }, {
          type: 'bar',
          data: [1, 2, 3, 4, 1, 2, 5],
          coordinateSystem: 'polar',
          name: 'C',
          stack: 'a'
      }],
      legend: {
          show: true,
          data: ['A', 'B', 'C'],
          textStyle: {
              color: 'white'
          }
      }      
    });

  }
}

export default radarChart;
