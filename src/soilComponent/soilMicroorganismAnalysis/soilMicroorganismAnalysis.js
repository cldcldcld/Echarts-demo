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
                  {value:610},
                  {value:333},
                  {value:274},
                  {value:235},
                  {value:400},
                  {value:500},
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
                  {value:510},
                  {value:230},
                  {value:274},
                  {value:235},
                  {value:400},
                  {value:674},
                  {value:235},
                  {value:400}
              ],
              roseType: 'radius',
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
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                  return Math.random() * 200;
              }
          }
      ],
      color: ['#CD6964', '#DE987D', '#F0D99C', '#6944DB', '#64CD64', '#E8A35E', '#5A67DF', '#5ABEDF']
    });

  }


}

export default soilMicroorganismAnalysis;
