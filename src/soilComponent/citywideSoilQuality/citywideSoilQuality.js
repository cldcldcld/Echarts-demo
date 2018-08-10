import React, { Component } from 'react';
// import './citywideSoilQuality.css'
import echarts from 'echarts';
// import '../../scss/soil/_citywideSoilQuality.scss'

class citywideSoilQuality extends Component {

  render() {
    return (
      <div className="citywideSoilQuality">
        <div id="citywideSoilQuality">
        </div>
      </div>
    );
  }

  componentDidMount() {
    var myChart = echarts.init(document.getElementById('citywideSoilQuality'));

    myChart.setOption({
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
                    color: 'rgba(255, 255, 255)',
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
          top: '32%',
          height: '50%',
          width: '80%'
      },
      legend: {
          top: 35,
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
              data: [18, 7, 10],
              emphasis: {
                itemStyle: {
                  borderColor: '#F0D99C',
                  borderWidth: 3
                }
              }
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
              data: [9, 17, 10],
              emphasis: {
                itemStyle: {
                  borderColor: '#DE987D',
                  borderWidth: 3
                }
              }
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
              data: [3, 6, 10],
              emphasis: {
                itemStyle: {
                  borderColor: '#CD6964',
                  borderWidth: 3
                }
              }
          }
      ]
    });

    setTimeout(function(){
      myChart.resize();
    }, 10)

  }


}

export default citywideSoilQuality;
