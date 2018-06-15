import React, { Component } from 'react';
import echarts from 'echarts';
import './stationPopup.css'

class stationPopup extends Component {
  render() {
    return (
      <div className='station-popup'>
        <div className='popup-title'>
          <div className='station-title'>
            <span className='station-number'>01</span>
            <span className='station-name'>Binjiang Air Station</span>
          </div>
          <div className='station-details'>
            <span>Latitude: 30.1898449 °N</span><br/>
            <span>Longitude: 120.1902294 °E</span><br/>
            <span>Elevation: 9 m</span>
          </div>
          <div className='weather-details'>
          </div>
        </div>
        <div className='popup-content'>
          <div className='station-img'>
            <img></img>
          </div>
          <div className='station-AQI-data'>
            <div className='AQITrend' id={'AQITrend-' + this.props.index}></div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {

    var myChart = echarts.init(document.getElementById('AQITrend-' + this.props.index));

    myChart.setOption({
      tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  crossStyle: {
                      color: '#999'
                  }
              }
          },
          xAxis: {
              type: 'category',
              data: ['1am','4am','7am','10am','13am','17am','20am','23am'],
              axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
          },
          yAxis: {
              type: 'value',
              min: 0,
              max: 10,
              axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
              }
          },
          series: [
              {
                  type:'bar',
                  data:[2.6, 2.9, 4.0, 4.4, 4.9, 5.7, 7.6, 8.2]
              },
              {
                  type:'line',
                  data:[2.6, 2.9, 4.0, 4.4, 4.9, 5.7, 7.6, 8.2],
                  lineStyle: {
                      color: 'rgba(255, 255, 255)'
                  }
              }
          ]      
    })

  }

}

export default stationPopup;
