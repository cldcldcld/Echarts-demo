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
    var days = ['Sat', 'Fri', 'Thur',
            'Wed', 'Tues', 'Mon', 'Sun'];

    var data = [
                // [0,0,38],[0,1,45],[0,2,70],[0,3,82],[0,4,96],[0,5,97],[0,6,88],[0,7,77],[0,8,56],[0,9,39],[0,10,67],[0,11,55],
                // [1,0,88],[1,1,73],[1,2,99],[1,3,121],[1,4,123],[1,5,121],[1,6,119],[1,7,98],[1,8,98],[1,9,94],[1,10,93],[1,11,92],
                // [2,0,67],[2,1,73],[2,2,73],[2,3,81],[2,4,83],[2,5,90],[2,6,86],[2,7,82],[2,8,80],[2,9,70],[2,10,67],[2,11,64],
                // [3,0,41],[3,1,47],[3,2,45],[3,3,41],[3,4,49],[3,5,45],[3,6,49],[3,7,43],[3,8,41],[3,9,41],[3,10,38],[3,11,35],
                // [4,0,56],[4,1,59],[4,2,53],[4,3,60],[4,4,67],[4,5,66],[4,6,65],[4,7,69],[4,8,65],[4,9,52],[4,10,51],[4,11,59],
                // [5,0,37],[5,1,45],[5,2,42],[5,3,41],[5,4,45],[5,5,42],[5,6,45],[5,7,41],[5,8,37],[5,9,35],[5,10,32],[5,11,30],
                // [6,0,76],[6,1,74],[6,2,71],[6,3,69],[6,4,74],[6,5,72],[6,6,64],[6,7,60],[6,8,86],[6,9,98],[6,10,103],[6,11,91]
                [0,0,38],[0,1,45],[0,2,70],[0,3,82],[0,4,96],[0,5,97],[0,6,88],[0,7,77],[0,8,56],[0,9,39],[0,10,67],[0,11,55],
                [1,0,88],[1,1,73],[1,2,99],[1,3,121],[1,4,123],[1,5,121],[1,6,119],[1,7,98],[1,8,98],[1,9,94],[1,10,93],[1,11,92],
                [2,0,167],[2,1,173],[2,2,173],[2,3,181],[2,4,283],[2,5,290],[2,6,310],[2,7,282],[2,8,280],[2,9,170],[2,10,167],[2,11,164],
                [3,0,141],[3,1,147],[3,2,245],[3,3,241],[3,4,349],[3,5,345],[3,6,249],[3,7,243],[3,8,141],[3,9,141],[3,10,138],[3,11,135],
                [4,0,56],[4,1,120],[4,2,153],[4,3,160],[4,4,167],[4,5,166],[4,6,165],[4,7,169],[4,8,165],[4,9,152],[4,10,151],[4,11,159],
                [5,0,37],[5,1,45],[5,2,42],[5,3,41],[5,4,45],[5,5,42],[5,6,45],[5,7,41],[5,8,37],[5,9,35],[5,10,32],[5,11,30],
                [6,0,76],[6,1,74],[6,2,71],[6,3,69],[6,4,74],[6,5,72],[6,6,64],[6,7,60],[6,8,86],[6,9,98],[6,10,103],[6,11,91]
            ];

    data = data.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });

    myChart.setOption({
        title: {
            text: [
                    '{titleImage|}{titleContext|Pollution Calendar}'
                  ].join('\n'),
            // left: 'left',
            top: 15,
            left: 15,
            textStyle: {
                rich: {
                    titleImage: {
                        backgroundColor: {
                            image: require('../../image/热力图-3.png')
                        },
                        height: 25
                    },
                    titleContext: {
                        color: '#FFFFFF',
                        fontFamily: 'Helvetica',
                        fontSize: 20,
                        padding: [0,0,0,5]
                    }
                }
            }
        },
        tooltip: {
            position: 'top'
        },
        animation: false,
        grid: {
            height: '50%',
            y: '30%',
            x: '15%'
        },
        xAxis: {
            type: 'category',
            data: hours,
            splitArea: {
                show: true
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.4)'
                }
            },
            axisTick: {
                show: false
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
                    color: 'rgba(255, 255, 255, 0.4)'
                }
            },
            axisTick: {
                show: false
            }
        },
        visualMap: {
            min: 0,
            max: 500,
            // calculable: true,
            orient: 'horizontal',
            left: '61%',
            top: '12%',
            itemHeight: 120,
            itemWidth: 12,
            textStyle: {
                color: 'rgba(255, 255, 255, 0.4)'
            },
            inRange: {
                // color: ['#F2DA9C', '#DE987D', '#CD6964', '#BF444C']
                color: ['#22C89C', '#F0C368', 'red']
            }
        },
        series: [{
            name: 'AQI(μg/m3)',
            type: 'heatmap',
            data: data,
            label: {
                normal: {
                    show: true,
                    align: 'center'
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(255, 255, 255, 0.4)'
                }
            },
            tooltip: {
                formatter: function (params) {
                    return params.seriesName + '<br/>' + params.name + ': ' + params.value[2];
                }
            }
        }]        
    });

  }
}

export default heatMapChart;
