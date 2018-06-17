import React, { Component } from 'react';
import echarts from 'echarts';
import './stationPopup.css'

class stationPopup extends Component {
  render() {
    return (
      <div className='station-popup'>
        <div className='popup-title'>
          <div className='station-title'>
            <span className='station-number'>{this.props.stationInfo.stationNumber}</span>
            <span className='station-name'>{this.props.stationInfo.stationName}</span>
          </div>
          <div className='station-details'>
            <span>{this.props.stationInfo.stationLatitude}</span><br/>
            <span>{this.props.stationInfo.stationLongitude}</span><br/>
            <span>{this.props.stationInfo.stationspecialty}</span>
          </div>
          <div className='station-weather'>
            <div className='station-temperature-number'>
              <span>{this.props.stationInfo.stationTemperature}</span>
            </div>
            <div className='station-temperature'>
              <img src={require('../../image/晴转小雨.png')} alt='Clear to Light Rain'></img><br/>
              <span className='station-temperature-degree'>°C</span>
            </div>
          </div>
        </div>
        <div className='popup-content'>
          <div className='station-img'>
            <img src={require('../../image/数据.png')} alt='Data'></img>
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
                      color: 'rgba(19,190,255,1)'
                  }
              }
          ]      
    })

  }

}

export default stationPopup;
