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
        backgroundColor: '#1E314B',
        title: {
            text: '主要污染物分析',
            // left: 'left',
            top: 20,
            left: 20,
            textStyle: {
                color: '#FFFFFF',
                fontFamily: 'PingFangSC-Regular'
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
            center: ['50%', '53%'],
            indicator: [
                {name: 'SO2', max: 150},
                {name: 'NO2', max: 80},
                {name: 'PM10', max: 150},
                {name: 'CO', max: 4},
                {name: 'O3', max: 200},
                {name: 'PM2.5', max: 75}
            ],
            shape: 'circle',
            splitNumber: 5,
            name: {
                textStyle: {
                    color: '#FFFFFF'
                }
            },
            splitLine: {
                lineStyle: {
                    color: [
                        '#FFFFFF', '#FFFFFF',
                    ].reverse(),
                    opacity: '0.3'
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF',
                    opacity: '0.3'
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
