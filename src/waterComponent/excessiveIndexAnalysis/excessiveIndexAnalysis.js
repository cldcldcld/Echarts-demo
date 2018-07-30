import React, { Component } from 'react';
// import './excessiveIndexAnalysis.css';
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
          left: '22%',
          top: '40%',
          height: '50%',
          width: '65%'
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
          },
          axisLabel: {
              margin: 15
          },
          axisTick: {
              show: false
          },
          min: 1,
          max: 1.5
      },
      yAxis: {
          type: 'category',
          data: ['P','NH3-N','BOD','N','KMnO4'],
          axisLine: {
              lineStyle: {
                  color: 'rgba(255, 255, 255, 0.4)'
              }
          },
          axisTick: {
              show: false
          },
          axisLabel: {
              margin: 20
          }
      },
      series: [
          {
              type: 'bar',
              stack: 'waterIndex',
              barCategoryGap: '50%',
              itemStyle: {
                color: 'rgba(255,255,255, 0)',
                barBorderRadius: 12
              },
              data: [1, 1, 1, 1, 1]
          },
          {
              type: 'bar',
              stack: 'waterIndex',
              barCategoryGap: '50%',
              itemStyle: {
                color: '#9885FE',
                barBorderRadius: 12
              },
              data: [0.14, 0.24, 0.28, 0.33, 0.42]
          },
          {
              type: 'bar',
              stack: 'waterIndex',
              itemStyle: {
                  color: 'rgba(152,133,254,0.10)',
                  barBorderRadius: [0, 12, 12, 0]
              },
              data: [0.36, 0.26, 0.22, 0.17, 0.08]
          }
      ]
    });


    setTimeout(function(){
      myChart.resize();
    }, 10)


  }


}

export default excessiveIndexAnalysis;
