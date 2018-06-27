import React, { Component } from 'react';
import './excessiveIndexAnalysis.css';
import echarts from 'echarts';

class excessiveIndexAnalysis extends Component {
  render() {
    return (
      <div className='excessiveIndexAnalysis'>
        <div id='excessiveIndexAnalysis'></div>
      </div>
    );
  }

  componentDidMount() {
    var myChart = echarts.init(document.getElementById('excessiveIndexAnalysis'));

    myChart.setOption({
      title:{
        text: [
                '{titleImage|}{titleContext|Excessive Index Multiple Analysis}'
              ].join('\n'),
        top: 10,
        left: 20,
        textStyle: {
            fontSize: 20,
            color: '#FFFFFF',
            rich: {
                titleImage: {
                    backgroundColor: {
                        image: require('../../image/histogram.png')
                    },
                    height: 25
                },
                titleContext: {
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontFamily: 'Helvetica',
                    fontSize: 20,
                    padding: [0,0,0,5],
                    width: 25
                }
            }        
        }
      },
      grid: {
          left: '20%',
          top: '35%',
          height: '55%',
          width: '70%'
      },
      xAxis:  {
          type: 'value',
          position: 'top',
          axisLine: {
              show: false,
              lineStyle: {
                  color: 'rgba(255, 255, 255, 0.4)'
              }
          },
          splitLine: {
              lineStyle: {
                  color: 'rgba(255, 255, 255, 0.2)'
              }
          }
      },
      yAxis: {
          type: 'category',
          data: ['KMnO4','N','BOD','NH3-N','P'],
          axisLine: {
              lineStyle: {
                  color: 'rgba(255, 255, 255, 0.4)'
              }
          }
      },
      series: [
          {
              type: 'bar',
              stack: 'waterIndex',
              barCategoryGap: '50%',
              label: {
                  normal: {
                      // show: true,
                      position: 'insideRight'
                  }
              },
              itemStyle: {
                color: '#5A67DF',
                barBorderRadius: 12
              },
              data: [1.14, 1.24, 1.28, 1.33, 1.42]
          },
          {
              type: 'bar',
              stack: 'waterIndex',
              label: {
                  normal: {
                      // show: true,
                      position: 'insideRight'
                  }
              },
              itemStyle: {
                  color: 'rgba(152,133,254,0.10)',
                  barBorderRadius: [0, 12, 12, 0]
              },
              data: [0.36, 0.26, 0.22, 0.17, 0.08]
          }
      ]
    });


  }


}

export default excessiveIndexAnalysis;
