import React, { Component } from 'react';
// import './historicDataAnalysis.css';
import echarts from 'echarts';

class historicDataAnalysis extends Component {
  render() {
    return (
      <div className='historicDataAnalysis'>
        <div id='historicDataAnalysis'></div>
      </div>
    );
  }

  componentDidMount() {
    var myChart = echarts.init(document.getElementById('historicDataAnalysis'));

    myChart.setOption({
          title:{
            text: [
                    '{titleImage|}{titleContext|Water Quality Historic Data Analysis}'
                  ].join('\n'),
            top: 10,
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
              top: 20,
              left: 500,
              data: ['Type I', 'Type II', 'Type III', 'Type IV', 'Type V'],
              textStyle: {
                fontSize: 12,
                color: 'rgba(255, 255, 255, 0.4)'
              },
              itemWidth: 12,
              itemHeight: 9
          },
          grid: {
              height: '45%',
              width: '85%',
              x: '8%',
              y: '35%'
          },
          xAxis: {
              type: 'category',
              data: ['Jan','Feb','Mar','Apr','May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
              splitNumber: 3,
              type: 'value',
              splitLine: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.1)'
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
          },
          series: [
              {
                  name: 'Type I',
                  type:'bar',
                  data:[5, 8, 5, 3, 3, 5, 7, 7, 3, 2, 3, 9],
                  stack: 'historic',
                  barCategoryGap: 25,
                  itemStyle: {
                    color: '#C0B6F5',
                    barBorderRadius: [0, 0, 8, 8]
                  }
              },
              {
                  name: 'Type II',
                  type:'bar',
                  data:[6, 4, 5, 5, 7, 4, 5, 4, 6, 6, 6, 3],
                  stack: 'historic',
                  itemStyle: {
                      color: '#AD9DFE'
                  }
              },
              {
                  name: 'Type III',
                  type:'bar',
                  data:[5, 5, 9, 6, 3, 4, 3, 3, 3, 3, 4, 3],
                  stack: 'historic',
                  barCategoryGap: 25,
                  itemStyle: {
                    color: '#9885FE'
                  }
              },
              {
                  name: 'Type IV',
                  type:'bar',
                  data:[8, 5, 4, 6, 8, 6, 6, 6, 5, 4, 6, 3],
                  stack: 'historic',
                  itemStyle: {
                      color: '#7C5ADF'
                  }
              },
              {
                  name: 'Type V',
                  type:'bar',
                  data:[6, 8, 7, 10, 9, 11, 9, 10, 13, 15, 11, 12],
                  stack: 'historic',
                  barCategoryGap: 25,
                  itemStyle: {
                    color: '#6944DB',
                    barBorderRadius: [8, 8, 0, 0]
                  }
              }
          ]      
    });

    setTimeout(function(){
      myChart.resize();
    }, 10)

  }


}

export default historicDataAnalysis;
