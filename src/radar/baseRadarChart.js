import React, { Component } from 'react';
import echarts from 'echarts';
import './baseRadarChart.css'

class baseRadarChart extends Component {
  render() {
    return (
      <div className='baseRadarChart'>
        <div id='radar'></div>
      </div>
    );
  }

  componentDidMount() {

    var wuzhouJSON = require('../wuzhou.json')
    echarts.registerMap('wuzhou', wuzhouJSON);
    require('echarts/map/js/world.js');
    var myChart = echarts.init(document.getElementById('radar'));
    var app = {};
    var option = null;

    var geoCoordMap = {
        "市环保": [111.280714,23.479524],
        "云盖小学": [111.330205,23.478115],
        "龙新": [111.255788,23.481198],
        "龙圩": [111.248777,23.417037],
        "双桥小学": [111.353268,23.548689],
        "岑溪": [111.001429,22.925752],
        "莲花山": [111.335207,23.515205],
        "藤县": [110.921067,23.381475],
        "梨埠": [111.516248,23.775149],
        "平浪村": [111.257688,23.520809]
    };

    var schema = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30"
    ];

    var rawData = [
      ["市环保",68,74,71,53,44,32,41,71,71,55,42,34,31,29,30,34,50,55,60,38,33,29,29,19,26,29,26,35,33,35],
      ["云盖小学",66,75,76,54,42,31,43,57,57,53,45,33,32,28,28,34,45,52,57,38,35,31,29,18,24,30,23,33,33,37],
      ["龙新",68,75,78,60,49,38,46,82,68,60,45,39,34,34,30,36,53,59,64,40,34,35,32,28,30,37,41,41,39,40],
      ["龙圩",74,88,86,67,55,42,47,73,90,69,50,45,43,35,37,44,61,61,76,43,37,38,39,30,35,38,36,51,43,40],
      ["双桥小学",30,25,24,33,38,40,42,23,25,26,29,42,20,24,30,35,25,23,26,30,30,31,37,29,28,38,35,30,20,25],
      ["岑溪",50,55,67,70,85,83,89,88,76,74,72,55,53,53,50,45,60,62,65,68,72,50,45,59,64,60,55,64,69,61],
      ["莲花山",40,46,49,53,37,39,33,35,47,48,44,40,38,50,55,53,58,59,51,44,40,35,32,55,60,54,51,44,48,50],
      ["藤县",65,60,72,76,79,88,80,87,82,80,91,95,87,81,70,77,72,66,61,69,63,70,70,73,79,66,62,55,52,50],
      ["梨埠",55,50,43,60,66,61,58,43,69,70,74,69,68,61,66,50,54,49,50,55,38,30,55,51,66,69,71,77,60,66],
      ["平浪村",30,36,39,42,29,47,50,55,52,49,41,42,44,39,31,31,36,51,52,59,61,66,55,51,58,44,41,49,38,30]
    ];



    function makeMapData(rawData) {
        var mapData = [];
        for (var i = 0; i < rawData.length; i++) {
            var geoCoord = geoCoordMap[rawData[i][0]];
            if (geoCoord) {
                mapData.push({
                    name: rawData[i][0],
                    value: geoCoord.concat(rawData[i].slice(1))
                });
            }
        }
        return mapData;
    };

    function makeParallelAxis(schema) {
        var parallelAxis = [];
        for (var i = 1; i < schema.length; i++) {
            parallelAxis.push({dim: i, name: schema[i]});
        }
        return parallelAxis;
    }


    option = {
        backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.4, [{
        //     offset: 0,
        //     color: '#4b5769'
        // }, {
            offset: 1,
            color: '#2A3C55'
        }]),
        title: {
            text: 'AQI指数 (单位)',
            left: '35%',
            top: '20%',
            itemGap: 0,
            textStyle: {
                color: '#FFFFFF',
                fontSize: 25,
                fontFamily: 'PingFangSC-Regular'
            },
            z: 200
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') + '.' + value[1];
                return params.seriesName + '<br/>' + params.name + ' : ' + value;
            }
        },
        toolbox: {
            show: true,
            left: 'right',
            iconStyle: {
                normal: {
                    borderColor: '#ddd'
                }
            },
            feature: {
            },
            z: 202
        },
        brush: {
            geoIndex: 0,
            brushLink: 'all',
            inBrush: {
                opacity: 1,
                symbolSize: 14
            },
            outOfBrush: {
                color: '#000',
                opacity: 0.2
            },
            z: 10
        },
        geo: {
            map: 'wuzhou',
            silent: true,
            label: {
                emphasis: {
                    show: false,
                    areaColor: '#eee'
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 0.2,
                    borderColor: '#404a59'
                }
            },
            left: '2%',
            top: '10%',
            bottom: '10%',
            right: '67%',
            roam: true
        },
        parallelAxis: makeParallelAxis(schema),
        grid: [{
            show: true,
            left: 0,
            right: 0,
            top: '100%',
            bottom: 0,
            borderColor: 'transparent',
            backgroundColor: '#2A3C55',
            z: 99
        }, {
            show: true,
            left: 0,
            right: 0,
            top: 0,
            height: 28,
            borderColor: 'transparent',
            backgroundColor: '#404a59',
            z: 199
        }],
        parallel: {
            top: '25%',
            left: '35%',
            right: '5%',
            bottom: '25%',
            axisExpandable: true,
            axisExpandCenter: 15,
            axisExpandCount: 10,
            axisExpandWidth: 60,
            axisExpandTriggerOn: 'mousemove',

            z: 100,
            parallelAxisDefault: {
                type: 'value',
                nameLocation: 'start',
                // nameRotate: 25,
                // nameLocation: 'end',
                nameTextStyle: {
                    fontSize: 20
                },
                nameTruncate: {
                    maxWidth: 170
                },
                nameGap: 20,
                splitNumber: 3,
                tooltip: {
                    show: true
                },
                axisLine: {
                    // show: false,
                    lineStyle: {
                        width: 1,
                        color: '#979797'
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                z: 100
            }
        },
        series: [
            {
                name: 'AQI指数',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: makeMapData(rawData),
                activeOpacity: 1,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                symbolSize: 15,
                // symbolSize: function (data) {
                //     return Math.max(5, data[2] / 5);
                // },
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        color: '#22CCDC',
                    }
                }
            },
            {
                name: 'parallel',
                type: 'parallel',
                smooth: true,
                lineStyle: {
                    normal: {
                        color: '#22CCDC',
                        width: 1,
                        opacity: 0.6,
                        // border: '2px solid #22CCDC'
                        // box-shadow: 6px 10px 8px 2px rgba(0,0,0,0.50);
                        // shadowColor: 'rgba(0,0,0,0)',
                        // shadowBlur: 5,
                        // shadowOffsetY: 5,
                    }
                },
                z: 100,
                blendMode: 'lighter',
                data: rawData
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }


  }
}

export default baseRadarChart;
