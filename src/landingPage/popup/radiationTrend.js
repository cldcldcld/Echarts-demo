import React, { Component } from 'react';
import echarts from 'echarts';
import './radiationTrend.css'

class radiationTrend extends Component {
  render() {
    return (
      <div className='radiationTrend'>
        <div className='radiation-trend' id={'radiationTrend-' + this.props.index}></div>
      </div>
    );
  }

  componentDidMount() {

 
    var myChart = echarts.init(document.getElementById('radiationTrend-' + this.props.index));

    myChart.setOption({
          title:{
            text: [
                    '{titleImage|}{titleContext|Radiation Trend Analysis}'
                  ].join('\n'),
            top: 10,
            left: 110,
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
              width: '85%',
              x: '8%'
          },
          xAxis: {
              type: 'category',
              data: ['1am','4am','7am','10am','13am','17am','20am','23am'],
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
              min: 0,
              max: 200,
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
              }
          },
          series: [
              {
                  type:'line',
                  data:[15, 25, 50, 45, 115, 20, 30, 70],
                  lineStyle: {
                      color: '#55FFA5',
                      width: '3'
                  },
                  itemStyle: {
                      color: '#FFFFFF'
                  },
                  symbolSize: 8
              },
              {
                  type:'line',
                  data:[80, 60, 100, 180, 130, 60, 100, 180],
                  lineStyle: {
                      color: '#55FFA5',
                      width: '3'
                  },
                  itemStyle: {
                      color: '#FFFFFF'
                  },
                  symbolSize: 8
              },
              {
                  type:'line',
                  data:[45, 95, 90, 145, 155, 95, 60, 90],
                  lineStyle: {
                      color: '#55FFA5',
                      width: '3'
                  },
                  itemStyle: {
                      color: '#FFFFFF'
                  },
                  symbolSize: 8
              }
          ]      
    })

  }
}

export default radiationTrend;
