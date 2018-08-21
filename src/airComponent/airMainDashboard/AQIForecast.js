import React, { Component } from 'react';
// import '../../scss/air/_AQIForecast.scss';
import echarts from 'echarts';

class AQIForecast extends Component {

  // constructor() {
  //   super();
   
  // }

  render() {
    return (
      <div className='dashboard-AQI-forecast'> 
        <div id='dashboardAQIForecast'></div>
        <div className='border-line'></div>
      </div>
    );
  }

  componentDidMount() {
    var myChart = echarts.init(document.getElementById('dashboardAQIForecast'));

    var option = {
      title:{
        text: 'AQI Forecast',
        top: 25,
        textStyle: {
            fontSize: 32,
            fontFamily: 'Helvetica',
            color: '#FFFFFF'
        }
      },
      grid: {
          height: '50%',
          width: '100%',
          left: '0%',
          top: '40%',
          containLabel: true
      },    
      tooltip: {
          position: 'top',
          formatter: function (params) {
              return params.name + '<br/>AQI ' + params.value;
          },
          backgroundColor: 'rgba(255,255,255,0.40)',
          extraCssText: 'text-align: center;'
      },
      xAxis: {
          type: 'category',
          data: ['-3h','-2h','-1h','now','1h','2h', '3h'],
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
              type:'line',
              symbolSize: 8,
              smooth: true,
              itemStyle: {
                color: 'rgba(34,181,200,1)'
              },
              areaStyle: {
                color: 'rgba(34,181,200,0.2)'
              },
              data: this.props.arrayCurrent
          },
          {
              type:'line',
              symbolSize: 8,
              smooth: true,
              itemStyle: {
                color: '#FFFFFF'
              },
              areaStyle: {
                color: 'rgba(255,255,255,0.2)'
              },
              data: this.props.arrayForecast
          }
      ]
    }
    
    myChart.setOption(option);

    setTimeout(function(){
      myChart.resize();
    }, 10)

    var self = this;

    setInterval( function (){
        self.props.dataRefresh();

        option.series[0].data = self.props.arrayCurrent;
        option.series[1].data = self.props.arrayForecast;
        myChart.setOption(option, true);

    }, 3000);
  }

}

export default AQIForecast;