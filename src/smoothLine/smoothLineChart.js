import React, { Component } from 'react';
import echarts from 'echarts';
import './smoothLineChart.css'

class smoothLineChart extends Component {
  constructor(props) {
    super(props);

    this.createOption = this.createOption.bind(this);
    this.option = {};
    this.AQIData = new Array();
    this.AQIData[0] = [];
    this.AQIData[1] = [];
    this.AQIData[2] = [];
    this.AQIData[3] = [];
    this.AQIData[4] = [];
    this.AQIData[5] = [];

    var data = [];

    var date = ['June 1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
    for (var i = 0; i < 120; i++) {
        data.push(date[parseInt(i/8)]);
        this.AQIData[0].push((Math.sin(i / 6) * (i / 6 -5) + i / 8) * 3+30);
        this.AQIData[1].push((Math.cos(i / 5) * (i / 5 -7) + i / 9) * 3+30);
        this.AQIData[2].push((Math.sin(i / 5) * (i / 6 -4) + i / 8) * 3+35);
        this.AQIData[3].push((Math.cos(i / 4) * (i / 5 -8) + i / 9) * 3+30);
        this.AQIData[4].push((Math.sin(i / 6) * (i / 5 -4) + i / 7) * 3+35);
        this.AQIData[5].push((Math.sin(i / 7) * (i / 6 -5) + i / 6) * 3+35);
    }

    this.createOption(date, data, this.AQIData)

  }

  render() {
    return (
      <div className='smoothLineChart'>
        <div className='button-list'>
            <button><span className='clicked color-0' onClick={this.handleClick.bind(this, 0)}>PM2.5</span></button>
            <button><span className='clicked color-1' onClick={this.handleClick.bind(this, 1)}>PM10</span></button>
            <button><span onClick={this.handleClick.bind(this, 2)}>SO2</span></button>
            <button><span onClick={this.handleClick.bind(this, 3)}>CO</span></button>
            <button><span onClick={this.handleClick.bind(this, 4)}>O3</span></button>
            <button><span onClick={this.handleClick.bind(this, 5)}>NO2</span></button>
        </div>
        <div id='smoothLineChart'></div>
      </div>
    );
  }

  handleClick(index, event) {
    var myChart = echarts.init(document.getElementById('smoothLineChart'));
    if (event.target.className) {
        event.target.className = '';
    } else {
        event.target.className = 'clicked ' + 'color-' + index;
    }

    if (this.option.series[index].data && this.option.series[index].data.length > 0) {
        this.option.series[index].data = []
    } else {
        this.option.series[index].data = this.AQIData[index]
    }
    myChart.setOption(this.option, true);
  }

  componentDidMount() {

    var myChart = echarts.init(document.getElementById('smoothLineChart'));

    myChart.setOption(this.option);
  }

  createOption(date, data, AQIData) {
    var option = {
        title:{
            text: [
                    '{titleImage|}{titleContext|VOC Trend Analysis}'
                  ].join('\n'),
            top: 20,
            left: 20,
            textStyle: {
                // fontFamily: 'PingFangSC-Regular',
                fontSize: 20,
                color: '#FFFFFF',
                rich: {
                    titleImage: {
                        backgroundColor: {
                            image: require('../image/会员发展趋势.png')
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
            },
            showTitle: true,
            itemGap: 140,
            subtext: [
                        '{averageValue|Avg Value}'
                     ].join('\n'),
            subtextStyle:{
               rich: {
                    averageValue: {
                        color: '#FFFFFF',
                        fontFamily: 'Helvetica',
                        opacity: 0.67,
                        fontSize: 16,
                        padding: [0,0,0,32]
                    }
                } 
            }
        },
        grid: {
            height: '65%',
            width: '82%',
            y: '25%',
            x: '12%'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: data,
            nameTextStyle: {
                // opacity: 0.4,
                // fontFamily: 'PingFangSC-Regular',
                // fontSize: '16px',
                color: 'red'                
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            axisLabel: {
                interval: 8,
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            splitNumber: 4,
            splitLine: {
                lineStyle: {
                    opacity: 0.2,
                }
            },
            axisTick: {
                show: false
            },
            nameTextStyle: {
                // opacity: 0.4,
                fontFamily: 'Helvetica',
                fontSize: '14px',
                color: '#FFFFFF'                
            }
        },
        series: [{
            data: this.AQIData[0],
            type: 'line',
            showSymbol: false,
            areaStyle: {
                color: 'rgba(103,227,243,0.11)'
            },
            lineStyle: {
                color: 'rgba(103,227,243)',
                width: '3'
            }
        },
        {
            data: this.AQIData[1],
            type: 'line',
            areaStyle: {
                color: 'rgba(147,123,242,0.18)'
            },
            showSymbol: false,
            lineStyle: {
                color: 'rgba(147,123,242)',
                width: '3'
            }
        },
        {
            data: [],
            type: 'line',
            areaStyle: {
                color: 'rgba(240,217,156,0.18)'
            },
            showSymbol: false,
            lineStyle: {
                color: '#F0D99C',
                width: '3'
            }
        },
        {
            data: [],
            type: 'line',
            areaStyle: {
                color: 'rgba(222,152,125,0.18)'
            },
            showSymbol: false,
            lineStyle: {
                color: '#DE987D',
                width: '3'
            }
        },
        {
            data: [],
            type: 'line',
            areaStyle: {
                color: 'rgba(97,67,254,0.18)'
            },
            showSymbol: false,
            lineStyle: {
                color: '#6143FE',
                width: '3'
            }
        },
        {
            data: [],
            type: 'line',
            areaStyle: {
                color: 'rgba(255,255,255,0.18)'
            },
            showSymbol: false,
            lineStyle: {
                color: '#FFFFFF',
                width: '3'
            }
        }]
    }
    this.option = option;
  }

}

export default smoothLineChart;
