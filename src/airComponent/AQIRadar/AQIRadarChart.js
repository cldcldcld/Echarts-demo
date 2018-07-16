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
        // [68,45,105,1.6,145,19],
        // [74,50,116,1.6,150,28],
        // [71,39,107,1.2,154,24],
        // [53,38,84,1.0,138,22],
        // [44,30,67,0.8,86,13],
        // [32,10,51,0.7,66,5],
        // [41,20,105,0.7,86,9],
        // [71,45,142,1.2,140,30],
        // [71,54,137,1.4,176,32],
        // [55,50,100,1.5,91,24]
        [19,45,95,26,45,48],
        [28,50,86,16,50,64],
        [24,39,57,12,54,61],
        [22,38,54,10,38,53],
        [13,60,47,8,56,44],
        [5,10,51,27,46,32],
        [9,20,65,17,36,41]
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
            text: [
                    '{titleImage|}{titleContext|Major Pollutant Analysis}'
                  ].join('\n'),
            top: 15,
            left: 15,
            textStyle: {
                rich: {
                    titleImage: {
                        backgroundColor: {
                            image: require('../../image/数据分析-2.png')
                        },
                        height: 25
                    },
                    titleContext: {
                        color: '#FFFFFF',
                        fontFamily: 'Helvetica',
                        fontSize: 20,
                        padding: [0,0,0,5]
                    }
                }
            }
        },
        radar: {
            center: ['50%', '55%'],
            radius: '65%',
            indicator: [
                {name: 'PM2.5', max: 30},
                {name: 'NO2', max: 80},
                {name: 'PM10', max: 100},
                {name: 'CO', max: 30},
                {name: 'O3', max: 80},
                {name: 'SO2', max: 80}
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
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: 'rgba(167,246,252,0.11)'},
                                {offset: 1, color: '#22B5C8'}
                            ]
                        )
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.1
                    }
                }
            }
        ]
    }

    myChart.setOption(option);

  }
}

export default AQIRadarChart;
