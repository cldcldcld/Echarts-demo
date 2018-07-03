import React, { Component } from 'react';
import './biogenicElementAnalysis.css'
import echarts from 'echarts';

class biogenicElementAnalysis extends Component {

  render() {
    return (
      <div className='total'>
        <div className="biogenicElementAnalysis">
          <div id="biogenicElementAnalysis">
          </div>
        </div>
        <div className="citywideSoilQuality1">
          <div id="citywideSoilQuality1">
          </div>
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



 var myChart2 = echarts.init(document.getElementById('citywideSoilQuality1'));

    myChart2.setOption({
      title:{
        text: [
                '{titleImage|}{titleContext|Citywide Soil Quality Analysis}'
              ].join('\n'),
        top: 10,
        left: 20,
        textStyle: {
            fontSize: 20,
            color: '#FFFFFF',
            rich: {
                titleImage: {
                    backgroundColor: {
                        image: require('../../image/verticalHistogram.png')
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
          left: '10%',
          top: '34%',
          height: '50%',
          width: '80%'
      },
      legend: {
          top: 40,
          left: 550,
          textStyle: {
            fontSize: 14,
            color: 'rgba(255, 255, 255, 0.6)'
          },
          itemHeight: 6,
          itemWidth: 12
      },
      xAxis:  {
          type: 'value',
          axisLine: {
              show: false,
              lineStyle: {
                  color: 'rgba(255, 255, 255, 0.4)'
              }
          },
          splitLine: {
              lineStyle: {
                  color: 'rgba(255, 255, 255, 0.1)'
              }
          },
          axisTick: {
            show: false
          }
      },
      yAxis: {
          type: 'category',
          data: ['Jun','May','Apr'],
          axisLine: {
              lineStyle: {
                  color: 'rgba(255, 255, 255, 0.4)'
              }
          },
          axisTick: {
            show: false
          }
      },
      series: [
          {
              name: 'Type I',
              type: 'bar',
              stack: 'soilIndex',
              barCategoryGap: '50%',
              label: {
                  normal: {
                      position: 'insideRight'
                  }
              },
              itemStyle: {
                color: '#F0D99C',
                barBorderRadius: [12, 0, 0, 12]
              },
              data: [18, 7, 10]
          },
          {
              name: 'Type II',
              type: 'bar',
              stack: 'soilIndex',
              label: {
                  normal: {
                      position: 'insideRight'
                  }
              },
              itemStyle: {
                  color: '#DE987D'
              },
              data: [9, 17, 10]
          },
          {
              name: 'Type III',
              type: 'bar',
              stack: 'soilIndex',
              label: {
                  normal: {
                      position: 'insideRight'
                  }
              },
              itemStyle: {
                  color: ' #CD6964',
                  barBorderRadius: [0, 12, 12, 0]
              },
              data: [3, 4, 7]
          },
          {
              type: 'bar',
              stack: 'soilIndex',
              label: {
                  normal: {
                      position: 'insideRight'
                  }
              },
              itemStyle: {
                  color: 'rgba(152,133,254,0.10',
                  barBorderRadius: [0, 12, 12, 0]
              },
              data: [0, 2, 3]
          }
      ]
    });





  }


}

export default biogenicElementAnalysis;
