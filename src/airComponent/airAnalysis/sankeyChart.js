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
        backgroundColor: '#2a3c55',
        series: {
            type: 'sankey',
            layout:'none',
            nodeWidth: 10,
            nodeGap: 20,
            lineStyle: {
                color: '#FFFFFF'
            },
            label:{
                color: '#FFFFFF'
            },
            data: [{
                name: 'Benzene'
            }, {
                name: 'Alkane'
            }, {
                name: 'Olefin',
            }, {
                name: 'Halohydrocarbon'
            }, {
                name: 'Alcohols'
            }, {
                name: 'Aldehydes'
            }, {
                name: 'Ketones'
            }, {
                name: 'Esters'
            }, {
                name: 'Aromatic Hydrocarbon'
            }, {
                name: 'Printing & Recording Media Replication'
            }, {
                name: 'Metal Manufacturing'
            }, {
                name: 'Textile Processing'
            }, {
                name: 'Rubber and Plastic Goods'
            }, {
                name: 'Trasportation'
                // label: {
                //   formatter: [
                //         '{firstImageContext|a1}',
                //         '{firstImage|}'
                //       ].join('\n'),
                //   rich: {
                //       firstImage: {
                //           backgroundColor: {
                //               image: require('../../image/会员发展趋势.png')
                //           },
                //           height: 40
                //       },
                //       firstImageContext: {
                //           color: 'black',
                //           fontFamily: 'Helvetica',
                //           fontSize: 20,
                //           padding: [0,0,0,5]
                //       }
                //   }
                // }
            }],
            links: [{
                source: 'Benzene',
                target: 'Printing & Recording Media Replication',
                value: 2
            }, {
                source: 'Olefin',
                target: 'Printing & Recording Media Replication',
                value: 4
            }, {
                source: 'Alcohols',
                target: 'Printing & Recording Media Replication',
                value: 2
            }, {
                source: 'Aldehydes',
                target: 'Printing & Recording Media Replication',
                value: 6
            },{
                source: 'Ketones',
                target: 'Printing & Recording Media Replication',
                value: 2
            }, {
                source: 'Esters',
                target: 'Printing & Recording Media Replication',
                value: 4
            }, {
                source: 'Amines',
                target: '',
                value: 2
            }, {
                source: 'Benzene',
                target: 'Metal Manufacturing',
                value: 2
            }, {
                source: 'Esters',
                target: 'Metal Manufacturing',
                value: 2
            }, {
                source: 'Benzene',
                target: 'Textile Processing',
                value: 4
            }, {
                source: 'Esters',
                target: 'Textile Processing',
                value: 2
            }, {
                source: 'Benzene',
                target: 'Rubber and Plastic Goods',
                value: 2
            }, {
                source: 'Halohydrocarbon',
                target: 'Rubber and Plastic Goods',
                value: 2
            }, {
                source: 'Alcohols',
                target: 'Rubber and Plastic Goods',
                value: 2
            }, {
                source: 'Aldehydes',
                target: 'Rubber and Plastic Goods',
                value: 2
            },{
                source: 'Ketones',
                target: 'Rubber and Plastic Goods',
                value: 6
            }, {
                source: 'Alkane',
                target: 'Trasportation',
                value: 2
            }, {
                source: 'Olefin',
                target: 'Trasportation',
                value: 2
            }, {
                source: 'Halohydrocarbon',
                target: 'Trasportation',
                value: 10
            }, {
                source: 'Aromatic Hydrocarbon',
                target: 'Trasportation',
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