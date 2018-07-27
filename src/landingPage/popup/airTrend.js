import React, { Component } from 'react';
import echarts from 'echarts';
// import './airTrend.css'

class airTrend extends Component {
  render() {
    return (
      <div className='airTrend'>
        <div className='air-trend' id={'airTrend-' + this.props.index}></div>
      </div>
    );
  }

  componentDidMount() {

 
    var myChart = echarts.init(document.getElementById('airTrend-' + this.props.index));

    myChart.setOption({
          title:{
            text: [
                    '{titleImage|}{titleContext|VOC Trend Analysis}'
                  ].join('\n'),
            top: 10,
            left: 130,
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
                  type:'bar',
                  data:[2.6, 2.9, 4.0, 4.4, 4.9, 5.7, 7.6, 8.2],
                  itemStyle: {
                      color: 'rgba(30,183,214,0.10)'
                  }
              },
              {
                  type:'line',
                  data:[2.6, 2.9, 4.0, 4.4, 4.9, 5.7, 7.6, 8.2],
                  lineStyle: {
                      color: 'rgba(19,190,255,1)',
                      width: '3'
                  },
                  itemStyle: {
                      color: '#FFFFFF'
                  },
                  symbolSize: 8
              }
          ]      
    })

    setTimeout(function(){
      myChart.resize();
    }, 10)

  }
}


export default airTrend;
