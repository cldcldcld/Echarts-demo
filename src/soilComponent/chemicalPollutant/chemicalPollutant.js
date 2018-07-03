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
	            nameGap: 30,
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
	      grid: {
	          left: '4%',
	          width: '90%'
	      },
	    legend: {
	        data: ['line', 'bar'],
	        textStyle: {
	            color: '#fff'
	        }
	    },
	    xAxis: {
	        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
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
	        name: 'line',
	        type: 'line',
	        smooth: true,
	        showAllSymbol: true,
	        symbol: 'emptyCircle',
	        symbolSize: 15,
	        data: []
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
	        name: 'line',
	        type: 'bar',
	        barGap: '-100%',
	        barWidth: 10,
	        itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(
	                    0, 0, 0, 1,
	                    [
	                        {offset: 0, color: 'rgba(20,200,212,0.5)'},
	                        {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
	                        {offset: 1, color: 'rgba(20,200,212,0)'}
	                    ]
	                )
	            }
	        },
	        z: -12,
	        data: []
	    }, {
	        name: 'dotted',
	        type: 'pictorialBar',
	        symbol: 'rect',
	        itemStyle: {
	            normal: {
	                color: '#0f375f'
	            }
	        },
	        symbolRepeat: true,
	        symbolSize: [12, 4],
	        symbolMargin: 1,
	        z: -10,
	        data: []
	    }]
    })

  }


}

export default chemicalPollutant;
