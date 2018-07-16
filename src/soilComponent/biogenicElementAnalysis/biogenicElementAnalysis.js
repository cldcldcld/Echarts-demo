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
                    color: 'rgba(255, 255, 255)',
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
          width: '80%',
          left: '7%',
          top: '35%',
          containLabel: true
      },
      tooltip: {
          position: 'top',
          formatter: function (params) {
              return params.name + '<br/>' + params.seriesName + ' ' + params.value;
          },
          backgroundColor: 'rgba(255,255,255,0.40)',
          extraCssText: 'text-align: center;'
      },
      xAxis: {
          type: 'category',
          data: ['Jan','Feb','Mar','Apr','May','Jun'],
          axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.4)'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            margin: 20
          },
          boundaryGap: ['10%', '10%']
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
          axisLabel: {
            margin: 20
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
              name:'P',
              type:'line',
              symbolSize: 8,
              itemStyle: {
                color: '#F0D99C'
              },
              lineStyle: {
                shadowBlur: 16,
                shadowColor: 'rgba(240,217,156,0.8)',
                shadowOffsetY: 10,
                width: 4,
                opacity: 0.6
              },
              data:[2200, 3800, 2600, 3100, 2500, 1400]
          },
          {
              name:'N',
              type:'line',
              symbolSize: 8,
              itemStyle: {
                color: '#FFA229',
              },
              lineStyle: {
                shadowBlur: 16,
                shadowColor: 'rgba(255,162,41,0.8)',
                shadowOffsetY: 10,
                width: 4
              },
              data:[1300, 1700, 1800, 2000, 1400, 300]
          }
      ]
    });


  }


}

export default biogenicElementAnalysis;
