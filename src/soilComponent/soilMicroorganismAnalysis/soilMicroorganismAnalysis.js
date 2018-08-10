import React, { Component } from 'react';
// import '../../scss/soil/_soilMicroorganismAnalysis.scss'
import echarts from 'echarts';
import LegendLabel from './legendLabel';

class soilMicroorganismAnalysis extends Component {

  constructor() {
    super();

    this.legendData = [
        {   
            color:{
              background: '#6944DB'
            },
            title: 'C6H6'
        },
        {   
            color:{
              background: '#5ABEDF'
            },
            title: 'CHCl3'
        },
        {   
            color:{
              background: '#5A67DF'
            },
            title: 'C8H8'
        },
        {   
            color:{
              background: '#CD6964'
            },
            title: 'C8H10'
        },
        {   
            color:{
              background: '#DE987D'
            },
            title: 'C6H5Cl'
        },
        {   
            color:{
              background: '#F0D99C'
            },
            title: 'C7H8'
        }
    ];

  }

  render() {

    const legendDataComponent = this.legendData.map((legendData) =>
        <div key={legendData.title} className="legend-data-item">
            <LegendLabel legendData={legendData}></LegendLabel>
        </div>
    );

    return (
      <div className="soilMicroorganismAnalysis">
        <div className='legend-list'>
          {legendDataComponent}
        </div>
        <div id="soilMicroorganismAnalysis">
        </div>
        <div className='warning-message'>
          <span>Speculative Leaking Pollutant：</span><br/>
          <span>Petroleum Leakage</span>
        </div>
      </div>
    );
  }

  componentDidMount() {
    var myChart = echarts.init(document.getElementById('soilMicroorganismAnalysis'));

    myChart.setOption({
      title: {
          text: [
                  '{titleImage|}{titleContext|Soil VOC Analysis}',
                  '{subTitleContextA|Soil Pollutant}',
                  '{subTitleContextB|Groundwater Pollutant}'
                ].join('\n'),
          // left: 'left',
          top: 10,
          left: 15,
          textStyle: {
              rich: {
                  titleImage: {
                      backgroundColor: {
                          image: require('../../image/clock.png')
                      },
                      height: 25
                  },
                  titleContext: {
                      color: '#FFFFFF',
                      fontFamily: 'Helvetica',
                      fontSize: 20,
                      padding: [0,0,0,5]
                  },
                  subTitleContextA: {
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: 14,
                      padding: [0,0,275,115]
                  },
                  subTitleContextB: {
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: 14,
                      padding: [0,0,235,95]
                  }
              }
          }
      },
      series : [
          {
              type:'pie',
              radius : [20, 100],
              center: ['50%', '34%'],
              data:[
                  {value:4, name:'C6H6'},
                  {value:5, name:'CHCl3'},
                  {value:1, name:'C8H8'},
                  {value:8, name:'C8H10'},
                  {value:7, name:'C6H5Cl'},
                  {value:9, name:'C7H8'}
              ],
              label: {
                  normal: {
                      show: false
                  },
                  emphasis: {
                      show: true
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  },
                  emphasis: {
                      show: true
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
              radius : [20, 100],
              center: ['50%', '74%'],
              data:[
                  {value:5, name:'C6H6'},
                  {value:4, name:'CHCl3'},
                  {value:8, name:'C8H8'},
                  {value:7, name:'C8H10'},
                  {value:8, name:'C6H5Cl'},
                  {value:3, name:'C7H8'}
              ],
              roseType: 'radius',
              label: {
                  normal: {
                      show: false
                  },
                  emphasis: {
                      show: true
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  },
                  emphasis: {
                      show: true
                  }
              },
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                  return Math.random() * 200;
              }
          }
      ],
      color: ['#6944DB', '#5ABEDF', '#5A67DF', '#CD6964', '#DE987D', '#F0D99C']
    });

    setTimeout(function(){
      myChart.resize();
    }, 10)

  }


}

export default soilMicroorganismAnalysis;
