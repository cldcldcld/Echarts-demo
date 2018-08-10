import React, { Component } from 'react';
import echarts from 'echarts';

class waterTrend extends Component {
  render() {
    return (
      <div className='waterTrend'>
        <div className='water-trend' id={'waterTrend-' + this.props.index}></div>
      </div>
    );
  }

  componentDidMount() {

 
    var myChart = echarts.init(document.getElementById('waterTrend-' + this.props.index));

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
              data: ['KMnO4','DO','BOD','NH3-N','P','Others'],
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
                  data:[2.4, 3.2, 5.6, 6.8, 3.8, 6.4],
                  stack: 'percent',
                  barCategoryGap: 25,
                  label: {
                      show: true,
                      formatter: function(obj){
                          var c = obj['value'] / 8 * 100;
                          c = c.toFixed(0);  
                          return c+"%";
                      },
                      position: 'top',
                      color: 'rgba(255,255,255,0.4)'
                  },
                  itemStyle: {
                    color: 'rgba(152,133,254,1)',
                    barBorderRadius: 8
                  }
              },
              {
                  type:'bar',
                  data:[5.6, 4.8, 2.4, 1.2, 4.2, 1.6],
                  stack: 'percent',
                  itemStyle: {
                      color: 'rgba(152,133,254,0.11)',
                      barBorderRadius: 8
                  }
              }
          ]      
    })

    setTimeout(function(){
      myChart.resize();
    }, 10)

  }
}

export default waterTrend;
