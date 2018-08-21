import React, { Component } from 'react';
import echarts from 'echarts';
import DiagnosisRecommendationSection from './diagnosisRecommendationSection';
// import '../../scss/air/_diagnosisRecommendation.scss';

class diagnosisRecommendation extends Component {

  constructor() {
    super();

    this.diagnosisCauseList = [
        {
            title: 'Excess Pollutant',
            content: 'SO2, Benzene, Hydrocarbons, Alkane',
            image: require('../../image/excessPollutant.png')
        },
        {
            title: 'Traffic Overview',
            content: 'Jianshe Si Road and Downtown Road 15:30 - 18:00 Crowded',
            image: require('../../image/traffic.png')
        },
        {
            title: 'Wind Direction',
            content: 'Direction: Northeast Speed: 25 km/h',
            image: require('../../image/windDirection.png')
        },
        {
            title: 'Nearby Industries',
            content: 'Da Jiangdong Industrial Agglomeration Area',
            image: require('../../image/nearByIndustries.png')
        }
    ];

    this.diagnosisCauseSummary = {
        title: 'Speculative Source',
        content: 'Chemical products manufacturing and transportation',
        image: ''
    }

  }

  render() {
    const diagnosisCauseSection = this.diagnosisCauseList.map((diagnosisCause) =>
        <div key={diagnosisCause.title} className="diagnosis-cause-details-section">
            <DiagnosisRecommendationSection diagnosisCause={diagnosisCause}></DiagnosisRecommendationSection>
        </div>
    );

    return (
  	    <div className="diagnosisRecommendation">
            <div className='diagnosis'>
                <div className='diagnosis-title'>
                    <span>Diagnosis</span>
                </div>
                <div className='diagnosis-content'>
                    <span>During 16:30-18:00, excess pollutant reaches peak value in Jianshe Si Road, Xiaoshan District. The excess pollutant moves north to Binjiang District.</span>
                </div>
                <div className='diagnosis-cause'>
                    <div className='diagnosis-cause-details'>
                        {diagnosisCauseSection}
                    </div>
                    <div className='diagnosis-cause-summary'>
                        <div className='diagnosis-cause-summary'>
                            <DiagnosisRecommendationSection diagnosisCause={this.diagnosisCauseSummary}></DiagnosisRecommendationSection>
                        </div>
                        <div className='diagnosis-video-button'>
                            <div className='diagnosis-video-button-content'>
                                <span>Watch Surveillance Video</span>
                            </div>
                            <div className='diagnosis-video-button-image'>
                                <img src={require('../../image/play.png')} alt='Play'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='recommendation'>
                <div className='recommendation-title'>
                    <span>Recommendation</span>
                </div>
                <div className='recommendation-content'>
                    <span>Decrease Longshan Chemicals Emission by 20% in 16:30 - 18:00 and decrease Jianshe Si Road traffic flow by 15% in 15:30 - 18:00</span>
                </div>
                <div className='recommendation-chart'>
                    <div id='recommendation-trend-chart'></div>
                    <div className='border-line'></div>
                </div>
            </div>
  	    </div>
    );
  }


  componentDidMount() {
    var myChart = echarts.init(document.getElementById('recommendation-trend-chart'));


    myChart.setOption({
        title:{
            text: [
                    '{titleContext|AQI Simulation Analysis}'
                  ].join('\n'),
            top: 380,
            left: 260,
            textStyle: {
                rich: {
                    titleContext: {
                        color: 'rgba(255, 255, 255, 0.3)',
                        fontFamily: 'Helvetica',
                        fontSize: 18
                    }
                }        
            }
        },
        legend: {
          data: ['Actual', 'Forecast'],
          align: 'left',
          left: 460,
          top: 20,
          textStyle: {
              color: 'white'
          }
        },
        grid: {
          height: '40%',
          width: '80%',
          x: '13%',
          y: '16%'
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
                    fontSize: 12,
                    color: 'rgba(255, 255, 255, 0.4)'
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                margin: 10
              },
              boundaryGap: ['10%', '10%']
        },
        yAxis: {
              splitNumber: 3,
              type: 'value',
              axisLine: {
                show: false,
                lineStyle: {
                    fontSize: 12,
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
                  name: 'Actual',
                  type:'line',
                  symbolSize: 8,
                  smooth: true,
                  itemStyle: {
                    color: 'rgba(34,181,200,1)'
                  },
                  areaStyle: {
                    color: 'rgba(34,181,200,0.2)'
                  },
                  data: [50, 100, 90, 140, 160, 110, 90]
              },
              {
                  name: 'Forecast',
                  type:'line',
                  symbolSize: 8,
                  smooth: true,
                  itemStyle: {
                    color: '#FFFFFF'
                  },
                  areaStyle: {
                    color: 'rgba(255,255,255,0.2)'
                  },
                  data: ['', '', '', 140, 120, 60, 40]
              }
        ]    
    })

    setTimeout(function(){
        myChart.resize();
    }, 10)

  }

}

export default diagnosisRecommendation;