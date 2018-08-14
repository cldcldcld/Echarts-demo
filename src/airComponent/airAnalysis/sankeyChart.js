import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import echarts from 'echarts';

class sankeyChart extends Component {

  constructor() {
    super();
   
    this.state = {change: true};

  }

  render() {

    return (
      <div className='sankey-chart'> 
        <div id='sankeyChart'></div>
  	 </div>
    );
  }


  componentDidMount() {

    var myChart = echarts.init(document.getElementById('sankeyChart'));

    var option = {
        series: {
            type: 'sankey',
            layout:'none',
            nodeWidth: 0,
            data: [{
                name: 'a'
            }, {
                name: 'b'
            }, {
                name: 'a1',
                label: {
                  formatter: [
                        '{firstImageContext|a1}',
                        '{firstImage|}'
                      ].join('\n'),
                  rich: {
                      firstImage: {
                          backgroundColor: {
                              image: require('../../image/会员发展趋势.png')
                          },
                          height: 40
                      },
                      firstImageContext: {
                          color: 'black',
                          fontFamily: 'Helvetica',
                          fontSize: 20,
                          padding: [0,0,0,5]
                      }
                  }
                }
            }, {
                name: 'b1'
            }, {
                name: 'c'
            }],
            links: [{
                source: 'a',
                target: 'a1',
                value: 2
            }, {
                source: 'a',
                target: 'b1',
                value: 2
            }, {
                source: 'b',
                target: 'b1',
                value: 2
            }, {
                source: 'b',
                target: 'a1',
                value: 2
            }, {
                source: 'c',
                target: 'a1',
                value: 2
            }, {
                source: 'c',
                target: 'b1',
                value: 2
            }]
        }
    };


    myChart.setOption(option);

    setTimeout(function(){
      myChart.resize();
    }, 10)
  }

}

export default sankeyChart;