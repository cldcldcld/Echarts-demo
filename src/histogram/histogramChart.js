import React, { Component } from 'react';
import echarts from 'echarts';
import './histogramChart.css'

class histogramChart extends Component {
  render() {
    return (
      <div className='histogramChart'>
        <div id='histogramChart'></div>
      </div>
    );
  }

  componentDidMount() {

    var myChart = echarts.init(document.getElementById('histogramChart'));
    var xAxisData = [];
    var data1 = [];
    var data2 = [];
    for (var i = 0; i < 100; i++) {
        xAxisData.push('item' + i);
        data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
        data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
    }

    myChart.setOption({
      title: {
          text: '柱状图动画延迟'
      },
      legend: {
          data: ['bar', 'bar2'],
          align: 'left'
      },
      toolbox: {
          // y: 'bottom',
          feature: {
              magicType: {
                  type: ['stack', 'tiled']
              },
              dataView: {},
              saveAsImage: {
                  pixelRatio: 2
              }
          }
      },
      tooltip: {},
      xAxis: {
          data: xAxisData,
          silent: false,
          splitLine: {
              show: false
          },
          axisLine: {
              lineStyle: {
                  color: 'white'
              }
          }
      },
      yAxis: {
          axisLine: {
              lineStyle: {
                  color: 'white'
              }
          }
      },
      series: [{
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: function (idx) {
              return idx * 10;
          }
      }, {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: function (idx) {
              return idx * 10 + 100;
          }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
          return idx * 5;
      }
    });

  }
}

export default histogramChart;
