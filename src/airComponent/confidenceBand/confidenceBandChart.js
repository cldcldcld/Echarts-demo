import React, { Component } from 'react';
import echarts from 'echarts';
import './confidenceBandChart.css';
// import axios from 'axios';

class confidenceBandChart extends Component {
  render() {
    return (
      <div className='confidenceBandChart'>
        <div id='confidenceBandChart'></div>
      </div>
    );
  }

  componentDidMount() {

    var data = require('./bandData.json');

    var myChart = echarts.init(document.getElementById('confidenceBandChart'));

    // axios.get('data/asset/data/confidence-band.json').then(function (data) {

    //     var base = -data.data.reduce(function (min, val) {
    //         return Math.floor(Math.min(min, val.l));
    //     }, Infinity);

    //     myChart.setOption({
    //         // title: {
    //         //     text: 'Confidence Band',
    //         //     subtext: 'Example in MetricsGraphics.js',
    //         //     left: 'center'
    //         // },
    //         tooltip: {
    //             trigger: 'axis',
    //             axisPointer: {
    //                 type: 'cross',
    //                 animation: false,
    //                 label: {
    //                     backgroundColor: '#ccc',
    //                     borderColor: '#aaa',
    //                     borderWidth: 1,
    //                     shadowBlur: 0,
    //                     shadowOffsetX: 0,
    //                     shadowOffsetY: 0,
    //                     textStyle: {
    //                         color: '#222'
    //                     }
    //                 }
    //             },
    //             formatter: function (params) {
    //                 return params[2].name + '<br />' + params[2].value;
    //             }
    //         },
    //         grid: {
    //             left: '3%',
    //             right: '4%',
    //             bottom: '3%',
    //             containLabel: true
    //         },
    //         xAxis: {
    //             type: 'category',
    //             data: data.data.map(function (item) {
    //                 return item.date;
    //             }),
    //             axisLabel: {
    //                 formatter: function (value, idx) {
    //                     var date = new Date(value);
    //                     return idx === 0 ? value : [date.getMonth() + 1, date.getDate()].join('-');
    //                 }
    //             },
    //             splitLine: {
    //                 show: false
    //             },
    //             boundaryGap: false,
    //             axisLine: {
    //                 lineStyle: {
    //                     color: 'white'
    //                 }
    //             }
    //         },
    //         yAxis: {
    //             axisLabel: {
    //                 formatter: function (val) {
    //                     return (val - base) * 100 + '%';
    //                 }
    //             },
    //             axisPointer: {
    //                 label: {
    //                     formatter: function (params) {
    //                         return ((params.value - base) * 100).toFixed(1) + '%';
    //                     }
    //                 }
    //             },
    //             splitNumber: 3,
    //             splitLine: {
    //                 show: false
    //             },
    //             axisLine: {
    //                 lineStyle: {
    //                     color: 'white'
    //                 }
    //             }
    //         },
    //         series: [{
    //             name: 'L',
    //             type: 'line',
    //             data: data.data.map(function (item) {
    //                 return item.l + base;
    //             }),
    //             lineStyle: {
    //                 normal: {
    //                     opacity: 0
    //                 }
    //             },
    //             stack: 'confidence-band',
    //             symbol: 'none'
    //         }, {
    //             name: 'U',
    //             type: 'line',
    //             data: data.data.map(function (item) {
    //                 return item.u - item.l;
    //             }),
    //             lineStyle: {
    //                 normal: {
    //                     opacity: 0
    //                 }
    //             },
    //             areaStyle: {
    //                 normal: {
    //                     color: '#ccc'
    //                 }
    //             },
    //             stack: 'confidence-band',
    //             symbol: 'none'
    //         }, {
    //             type: 'line',
    //             data: data.data.map(function (item) {
    //                 return item.value + base;
    //             }),
    //             hoverAnimation: false,
    //             symbolSize: 6,
    //             itemStyle: {
    //                 normal: {
    //                     color: '#c23531'
    //                 }
    //             },
    //             showSymbol: false
    //         }]
    //     });
    // });

    var base = -data.reduce(function (min, val) {
        return Math.floor(Math.min(min, val.l));
    }, Infinity);

    myChart.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                animation: false,
                label: {
                    backgroundColor: '#ccc',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    textStyle: {
                        color: '#222'
                    }
                }
            },
            formatter: function (params) {
                return params[2].name + '<br />' + params[2].value;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: data.map(function (item) {
                return item.date;
            }),
            axisLabel: {
                formatter: function (value, idx) {
                    var date = new Date(value);
                    return idx === 0 ? value : [date.getMonth() + 1, date.getDate()].join('-');
                }
            },
            splitLine: {
                show: false
            },
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            }
        },
        yAxis: {
            axisLabel: {
                formatter: function (val) {
                    return (val - base) * 100 + '%';
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return ((params.value - base) * 100).toFixed(1) + '%';
                    }
                }
            },
            splitNumber: 3,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            }
        },
        series: [{
            name: 'L',
            type: 'line',
            data: data.map(function (item) {
                return item.l + base;
            }),
            lineStyle: {
                normal: {
                    opacity: 0
                }
            },
            stack: 'confidence-band',
            symbol: 'none'
        }, {
            name: 'U',
            type: 'line',
            data: data.map(function (item) {
                return item.u - item.l;
            }),
            lineStyle: {
                normal: {
                    opacity: 0
                }
            },
            areaStyle: {
                normal: {
                    color: '#ccc'
                }
            },
            stack: 'confidence-band',
            symbol: 'none'
        }, {
            type: 'line',
            data: data.map(function (item) {
                return item.value + base;
            }),
            hoverAnimation: false,
            symbolSize: 6,
            itemStyle: {
                normal: {
                    color: '#c23531'
                }
            },
            showSymbol: false
        }]
    });


  }
}

export default confidenceBandChart;
