import React, { Component } from 'react';
import './historicDataAnalysis.css';
import echarts from 'echarts';

class historicDataAnalysis extends Component {
  render() {
    return (
      <div className='historicDataAnalysis'>
        <div id='historicDataAnalysis'></div>
      </div>
    );
  }

  componentDidMount() {
    var myChart = echarts.init(document.getElementById('historicDataAnalysis'));

    myChart.setOption({
          title:{
            text: [
                    '{titleImage|}{titleContext|Major Pollutant Analysis}'
                  ].join('\n'),
            top: 10,
            left: 120,
            textStyle: {
                fontSize: 20,
                color: '#FFFFFF',
                rich: {
                    titleImage: {
                        backgroundColor: {
                            image: require('../../image/会员发展趋势.png')
                        },
                        height: 25
                    },
                    titleContext: {
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontFamily: 'Helvetica',
                        fontSize: 20,
                        padding: [0,0,5,10]
                    }
                }        
            }
          },
          grid: {
              height: '55%',
              width: '80%',
              x: '8%'
          },
          xAxis: {
              type: 'category',
              data: ['Jan','Feb','Mar','Apr','May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              minInterval: 2,
              splitLine: {
                show: false
              },
              axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.2)'
                }
              },
              axisTick: {
                  show: false
              }
          },
          yAxis: {
              type: 'value',
              splitLine: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.2)'
                }
              },
              axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.2)'
                }
              },
              axisTick: {
                  show: false
              },
              axisLabel: {
                show: false
              },
          },
          series: [
              {
                  type:'bar',
                  data:[3, 8, 4, 2, 3, 5, 7, 7, 3, 2, 3, 9],
                  stack: 'percent',
                  barCategoryGap: 25,
                  itemStyle: {
                    color: 'rgba(152,133,254,1)'
                  }
              },
              {
                  type:'bar',
                  data:[4, 4, 4, 4, 6, 3, 4, 3, 5, 5, 5, 2],
                  stack: 'percent',
                  itemStyle: {
                      color: 'rgba(152,133,254,0.11)'
                  }
              },
              {
                  type:'bar',
                  data:[3, 5, 8, 5, 2, 3, 2, 2, 2, 2, 3, 2],
                  stack: 'percent',
                  barCategoryGap: 25,
                  itemStyle: {
                    color: 'rgba(152,133,254,1)'
                  }
              },
              {
                  type:'bar',
                  data:[8, 5, 3, 5, 7, 5, 5, 5, 4, 3, 5, 2],
                  stack: 'percent',
                  itemStyle: {
                      color: 'rgba(152,133,254,0.11)'
                  }
              },
              {
                  type:'bar',
                  data:[3, 8, 4, 2, 3, 5, 7, 7, 3, 2, 3, 9],
                  stack: 'percent',
                  barCategoryGap: 25,
                  itemStyle: {
                    color: 'rgba(152,133,254,1)'
                  }
              }
          ]      
    });

  }


}

export default historicDataAnalysis;
