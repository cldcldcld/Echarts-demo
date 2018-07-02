import React, { Component } from 'react';
import './soilMicroorganismAnalysis.css'
import echarts from 'echarts';

class soilMicroorganismAnalysis extends Component {

  render() {
    return (
      <div className="soilMicroorganismAnalysis">
        <div id="soilMicroorganismAnalysis">
        </div>
      </div>
    );
  }

  componentDidMount() {
    var myChart = echarts.init(document.getElementById('soilMicroorganismAnalysis'));

    myChart.setOption({
      title: {
          text: 'Soil Microorganism Analysis',
          left: 'center',
          top: 20,
          textStyle: {
              color: '#ccc'
          }
      },
      series : [
          {
              name:'访问来源',
              type:'pie',
              radius : '55%',
              center: ['50%', '30%'],
              data:[
                  {value:335},
                  {value:310},
                  {value:274},
                  {value:235},
                  {value:400}
              ],
              label: {
                  normal: {
                      show: false
                  }
              },
              lableLine: {
                  normal: {
                      show: false
                  }
              },
              roseType: 'radius',
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                  return Math.random() * 200;
              }
          },
          {
              type:'pie',
              radius : '55%',
              center: ['50%', '75%'],
              data:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:274, name:'联盟广告'},
                  {value:235, name:'视频广告'},
                  {value:400, name:'搜索引擎'}
              ],
              roseType: 'radius',
              label: {
                  normal: {
                      textStyle: {
                          color: 'rgba(255, 255, 255, 0.3)'
                      }
                  }
              },
              labelLine: {
                  normal: {
                      lineStyle: {
                          color: 'rgba(255, 255, 255, 0.3)'
                      },
                      smooth: 0.2,
                      length: 10,
                      length2: 20
                  }
              },
              itemStyle: {
                  normal: {
                      color: '#c23531',
                      shadowBlur: 200,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              },

              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                  return Math.random() * 200;
              }
          }
      ]
    });

  }


}

export default soilMicroorganismAnalysis;
