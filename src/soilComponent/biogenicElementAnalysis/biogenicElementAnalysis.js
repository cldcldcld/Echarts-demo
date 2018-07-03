import React, { Component } from 'react';
import './biogenicElementAnalysis.css'
import echarts from 'echarts';

class biogenicElementAnalysis extends Component {

  render() {
    return (
      <div className="biogenicElementAnalysis">
        <div id="biogenicElementAnalysis">
        </div>
      </div>
    );
  }

  componentDidMount() {
    var myChart = echarts.init(document.getElementById('biogenicElementAnalysis'));

    myChart.setOption({
      title:{
        text: [
                '{titleImage|}{titleContext|Biogenic Element Analysis}'
              ].join('\n'),
        top: 20,
        left: 20,
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
      legend: {
          type: 'scroll',
          orient: 'vertical',
          data:['N','P'],
          top: 40,
          left: 380,
          textStyle: {
            fontSize: 18,
            color: 'rgba(255, 255, 255)'
          },
          itemHeight: 12,
          itemWidth: 40
      },
      grid: {
          height: '55%',
          // width: '80%',
          left: '5%',
          top: '35%',
          containLabel: true
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Jan','Feb','Mar','Apr','May','Jun'],
          axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.4)'
            }
          },
          axisTick: {
            show: false
          }
      },
      yAxis: {
          splitNumber: 3,
          type: 'value',
          axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.4)'
            }
          },
          splitLine: {
              lineStyle: {
                  opacity: 0.1,
              }
          },
          axisTick: {
            show: false
          }
      },
      series: [
          {
              name:'N',
              type:'line',
              symbolSize: 7,
              itemStyle: {
                color: '#F0D99C',
                width: 8
              },
              lineStyle: {
                shadowBlur: 16,
                shadowColor: '#F0D99C',
                shadowOffsetY: 8
              },
              data:[2200, 3800, 2600, 3100, 2500, 1400]
          },
          {
              name:'P',
              type:'line',
              symbolSize: 7,
              itemStyle: {
                color: '#FFA229',
                width: 8
              },
              lineStyle: {
                shadowBlur: 16,
                shadowColor: '#FFA229',
                shadowOffsetY: 8
              },
              data:[1300, 1700, 1800, 2000, 1400, 300]
          }
      ]
    });


  }


}

export default biogenicElementAnalysis;
