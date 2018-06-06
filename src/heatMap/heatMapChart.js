import React, { Component } from 'react';
import echarts from 'echarts';
import './heatMapChart.css'

class heatMapChart extends Component {
  render() {
    return (
      <div className='heatMapChart'>
        <div id='heatMapChart'></div>
      </div>
    );
  }

  componentDidMount() {

    var myChart = echarts.init(document.getElementById('heatMapChart'));

    var hours = ['12a', '2a', '4a', '6a', '8a', '10a', '12p',
            '2p', '4p', '6p','8p','10p'];
    var days = ['周六', '周五', '周四',
            '周三', '周二', '周一', '周日'];

    var data = [
                [0,0,41],[0,1,37],[0,2,35],[0,3,32],[0,4,30],[0,5,37],[0,6,45],[0,7,42],[0,8,41],[0,9,45],[0,10,42],[0,11,45],
                [1,0,45],[1,1,42],[1,2,41],[1,3,39],[1,4,33],[1,5,39],[1,6,45],[1,7,44],[1,8,40],[1,9,37],[1,10,46],[1,11,45],
                [2,0,43],[2,1,41],[2,2,41],[2,3,38],[2,4,35],[2,5,41],[2,6,47],[2,7,45],[2,8,41],[2,9,49],[2,10,45],[2,11,49],
                [3,0,42],[3,1,40],[3,2,40],[3,3,37],[3,4,34],[3,5,40],[3,6,46],[3,7,45],[3,8,41],[3,9,48],[3,10,44],[3,11,48],
                [4,0,40],[4,1,38],[4,2,38],[4,3,35],[4,4,32],[4,5,38],[4,6,44],[4,7,43],[4,8,39],[4,9,46],[4,10,42],[4,11,46],
                [5,0,41],[5,1,37],[5,2,39],[5,3,34],[5,4,32],[5,5,38],[5,6,45],[5,7,42],[5,8,40],[5,9,45],[5,10,43],[5,11,45],
                [6,0,40],[6,1,36],[6,2,38],[6,3,33],[6,4,31],[6,5,37],[6,6,44],[6,7,41],[6,8,39],[6,9,44],[6,10,42],[6,11,44]];

    data = data.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });

    myChart.setOption({
        tooltip: {
            position: 'top'
        },
        animation: false,
        grid: {
            height: '50%',
            y: '10%'
        },
        xAxis: {
            type: 'category',
            data: hours,
            splitArea: {
                show: true
            },
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            }
        },
        yAxis: {
            type: 'category',
            data: days,
            splitArea: {
                show: true
            },
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            }
        },
        visualMap: {
            min: 30,
            max: 100,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '15%'
        },
        series: [{
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]        
    });

  }
}

export default heatMapChart;
