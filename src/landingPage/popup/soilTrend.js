import React, { Component } from 'react';
import echarts from 'echarts';
import './soilTrend.css'

class soilTrend extends Component {
  render() {
    return (
      <div className='soilTrend'>
        <div className='soil-trend' id={'soilTrend-' + this.props.index}></div>
      </div>
    );
  }

  componentDidMount() {

 
    var myChart = echarts.init(document.getElementById('soilTrend-' + this.props.index));

    myChart.setOption({
          title:{
            text: [
                    '{titleImage|}{titleContext|Nemerrow Index Analys}'
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
              width: '85%',
              x: '8%'
          },
          xAxis: {
              type: 'category',
              data: ['Jan','Feb','Mar','Apr','May','Jun'],
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
              max: 10,
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
                  data:[4.6, 5.5, 2.6, 3.7, 5.9, 2.7, 3.6],
                  lineStyle: {
                      color: 'rgba(254,161,40,1)'
                  },
                  areaStyle: {
                      color: 'rgba(255,162,41,0.1)'
                  }
              }
          ]      
    })

  }
}

export default soilTrend;
