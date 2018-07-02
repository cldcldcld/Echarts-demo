import React, { Component } from 'react';
import './chemicalPollutant.css';
import echarts from 'echarts';

class chemicalPollutant extends Component {

  render() {
    return (
      <div className='chemicalPollutant'>
       <div id='chemicalPollutant'></div>
      </div>
    );
  }

  componentDidMount() {

    var myChart = echarts.init(document.getElementById('chemicalPollutant'));

    myChart.setOption({
	    xAxis: {
	        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27'],
	        axisLine: {
	            show: false
	        },
	        splitLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        }
	    },
	    yAxis: {
	        // show: false,
	        axisLine: {
	            show: false
	        },
	        splitLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        }
	    },
	    series: [{
	        name: '11',
	        type: 'candlestick',
	        data: [
	            [0, 10, 0, 60],
	            [0, 15, 0, 60],
	            [0, 18, 0, 60],
	            [0, 22, 0, 60]
	        ],
	        markArea: {
	            label: {
	                show: true
	            },
	            data: [
	                [
	                    {
	                        name: '两个屏幕坐标之间的标域',
	                        yAxis: 60,
	                        x: '50%'
	                    }, {
                     		name: '两个屏幕坐标之间的标域111',
	                        yAxis: 30,
	                        x: '50%'
	                    }
	                ]
	            ]
	        }
	    },
	        {
	            type: 'line',
	            data: [20, 30, 40 ,30]
	        }
	    ]
    })
  }


}

export default chemicalPollutant;
