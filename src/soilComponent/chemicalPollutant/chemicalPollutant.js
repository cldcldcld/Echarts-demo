import React, { Component } from 'react';
import './chemicalPollutant.css';
import echarts from 'echarts';

class chemicalPollutant extends Component {

  render() {
    return (
    	<div className='chemicalPollutant'>
	      <div className='chemicalPollutantBar'>
	      	<div id='chemicalPollutantBar'>
	      	</div>
	      </div>
	      <div className='chemicalPollutantParallel'>
	      	<div id='chemicalPollutantParallel'></div>
	      </div>
      	</div>
    );
  }

  componentDidMount() {

    var myChartBar = echarts.init(document.getElementById('chemicalPollutantBar'));

    myChartBar.setOption({
	 	parallelAxis: [
	        {dim: 0, name: 'Cd', max: 1, min:0.2 },
			{dim: 1, name: 'Hg', max: 1.5, min:0.15 },
	        {dim: 2, name: 'As', max: 30, min:15 },
			{dim: 3, name: 'Cu', max: 400, min:35 },
	        {dim: 4, name: 'Pb', max: 500, min:35 },
			{dim: 5, name: 'Cr', max: 400, min:90 },
	        {dim: 6, name: 'Zn', max: 500, min:100 },
			{dim: 7, name: 'Ni', max: 200, min:40 },
	        {dim: 8, name: 'C6H6Cl6', max: 1, min:0.05 },
			{dim: 9, name: 'Cd', max: 1, min:0.05 }
	    ],
	    parallel: {
	        top: '20%',
	        bottom: '20%',
	        parallelAxisDefault: {
	            type: 'value',
	            nameLocation: 'start',
	            nameGap: 40,
	            splitNumber: 1,
	            minInterval : 1000,
	            nameTextStyle: {
	                color: 'rgba(255,255,255,1)',
	                fontSize: 14
	            },
	            axisLine: {
	                lineStyle: {
	                    color: 'rgba(151,151,151,0.25)'
	                }
	            },
	            axisTick: {
					show: false
	            },
	            axisLabel: {
	                textStyle: {
	                    color: 'rgba(255,255,255,1)'
	                },
	                margin: 20
	            }
	        }
	    },
	    series: {
	        type: 'parallel',
	        data: []
	    }
    })


 var myChartParallel = echarts.init(document.getElementById('chemicalPollutantParallel'));

    myChartParallel.setOption({
		title:{
	        text: [
	                '{titleImage|}{titleContext|Soil Inorganic Element Analysis}'
	              ].join('\n'),
	        top: 10,
	        left: 20,
	        textStyle: {
	            fontSize: 20,
	            color: '#FFFFFF',
	            rich: {
	                titleImage: {
	                    backgroundColor: {
	                        image: require('../../image/histogram.png')
	                    },
	                    height: 25
	                },
	                titleContext: {
	                    color: 'rgba(255, 255, 255)',
	                    fontFamily: 'Helvetica',
	                    fontSize: 20,
	                    padding: [0,0,0,5]
	                }
	            }
	        }
      	},
      	tooltip: {
      		position: 'top',
          	formatter: function (params) {
          		var name = params.name.split(",");
          		var flg = params.seriesName.indexOf('series')
            	return name && flg === -1 ? params.seriesName + '<br/>' + name[0] + ' ' + name[1] : '';
          	},
          	backgroundColor: 'rgba(255,255,255,0.40)',
			extraCssText: 'text-align: center;'
      	},
	    grid: {
	        left: '5%',
	        width: '90%'
	    },
	    legend: {
	    	top: 15,
	        left: 650,
	        itemHeight: 12,
	        itemWidth: 40,
	        data: ['Standard value'],
	        textStyle: {
	            color: 'rgba(255,255,255,0.4)',
	            fontSize: 14
	        }
	    },
	    xAxis: {
	        // data: ['Cd', 'Hg', 'As', 'Cu', 'Pb', 'Cr', 'Zn', 'Ni', 'C6H6CL6', 'Cd'],
	        data: [
	        		['Cd', 0.3],
	        		['Hg', 0.5],
	        		['As', 24],
	        		['Cu', 100],
	        		['Pb', 300],
	        		['Cr', 300],
	        		['Zn', 250],
	        		['Ni', 50],
	        		['C6H6CL6', 0.5],
	        		['Cd', 0.5]
	        ],
	        show: false
	    },
	    yAxis: {
	    	show: false,
	        min: 0,
	        max: 20,
	        axisLine: {
	            lineStyle: {
	                color: '#fff'
	            }
	        }
	    },
	    series: [{
	        name: 'Standard value',
	        type: 'line',
	        smooth: true,
	        showAllSymbol: true,
	        symbolSize: 10,
	        itemStyle: {
	        	color: '#5AA1DF'
	        },
	        lineStyle: {
	        	width: 4
	        },
	        data: [4, 5, 12, 4, 6, 12, 6, 2, 9, 9]
	    }, {
	        type: 'bar',
	        barWidth: 30,
	        itemStyle: {
	            normal: {
	                barBorderRadius: 8,
	                color: new echarts.graphic.LinearGradient(
	                    0, 0, 0, 1,
	                    [
	                        {offset: 0, color: '#CD6964'},
	                        {offset: 1, color: '#F0D99C'}
	                    ]
	                )
	            }
	        },
	        data: [5, 4, 5, 8, 5, 8, 5, 1, 10, 8]
	    }, {
	        type: 'pictorialBar',
	        symbol: 'roundRect',
	        barWidth: 30,
	        itemStyle: {
	            normal: {
	            	barBorderRadius: 16,
					color: new echarts.graphic.LinearGradient(
	                    0, 0, 0, 5,
	                    [
	                        {offset: 0, color: 'rgba(212,127,111,0.1)'},
	                        {offset: 1, color: 'rgba(231,188,142,1)'}
	                    ]
	                )
	            }
	        },
	        symbolRepeat: true,
	        symbolSize: [30, 8],
	        symbolMargin: 2,
	        z: -10,
	        data: [4, 5, 12, 4, 6, 12, 6, 2, 9, 9]
	    }]
    })

  }


}

export default chemicalPollutant;
