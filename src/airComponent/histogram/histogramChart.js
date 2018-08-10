import React, { Component } from 'react';
import echarts from 'echarts';

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
    for (var i = 0; i < 31; i++) {
        xAxisData.push(i);
        data1.push((Math.sin(i / 9) * (i / 5) + i / 5) * 15);
        data2.push((Math.cos(i / 6) * (i / 5) + i / 5) * 15);
    }

    myChart.setOption({
      // title: {
      //     text: '柱状图动画延迟'
      // },
      legend: {
          data: ['PM2.5', 'PM10'],
          align: 'left',
          textStyle: {
              color: 'white'
          }
      },
      // toolbox: {
      //     // y: 'bottom',
      //     feature: {
      //         magicType: {
      //             type: ['stack', 'tiled']
      //         },
      //         dataView: {},
      //         saveAsImage: {
      //             pixelRatio: 2
      //         }
      //     }
      // },
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
          name: 'PM2.5',
          type: 'bar',
          data: data1,
          animationDelay: function (idx) {
              return idx * 20;
          }
      }, {
          name: 'PM10',
          type: 'bar',
          data: data2,
          animationDelay: function (idx) {
              return idx * 10 + 100;
          }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
          return idx * 15;
      }
    });

    setTimeout(function(){
      myChart.resize();
    }, 10)

  }
}

export default histogramChart;
