import React, { Component } from 'react';
import echarts from 'echarts';
import './AQIRadarChart.css'

class AQIRadarChart extends Component {
  render() {
    return (
      <div className='AQIRadarChart'>
        <div id='AQIRadarChart'></div>
      </div>
    );
  }

  componentDidMount() {

    var myChart = echarts.init(document.getElementById('AQIRadarChart'));

    var option = {};

    var dataAQI = [
        [19,45,105,1.6,145,68],
        [28,50,116,1.6,150,74],
        [24,39,107,1.2,154,71],
        [22,38,84,1.0,138,53],
        [13,30,67,0.8,86,44],
        [5,10,51,0.7,66,32],
        [9,20,105,0.7,86,41],
        [30,45,142,1.2,140,71],
        [32,54,137,1.4,176,71],
        [24,50,100,1.5,91,55]
    ];

    var lineStyle = {
        normal: {
            width: 1,
            opacity: 0.5
        }
    };

    option = {
        backgroundColor: '#161627',
        title: {
            // text: 'AQI - 雷达图',
            left: 'center',
            textStyle: {
                color: '#eee'
            }
        },
        // legend: {
        //     bottom: 5,
        //     data: ['北京', '上海', '广州'],
        //     itemGap: 20,
        //     textStyle: {
        //         color: '#fff',
        //         fontSize: 14
        //     },
        //     selectedMode: 'single'
        // },
        radar: {
            indicator: [
                {name: 'AQI', max: 300},
                {name: 'PM2.5', max: 250},
                {name: 'PM10', max: 300},
                {name: 'CO', max: 5},
                {name: 'NO2', max: 200},
                {name: 'SO2', max: 100}
            ],
            shape: 'circle',
            splitNumber: 5,
            name: {
                textStyle: {
                    color: 'rgb(238, 197, 102)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                    ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.5)'
                }
            }
        },
        series: [
            {
                name: 'AQI',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataAQI,
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: '#F9713C'
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.05
                    }
                }
            }
        ]
    }

    myChart.setOption(option);

  }
}

export default AQIRadarChart;
