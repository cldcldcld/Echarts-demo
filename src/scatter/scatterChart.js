import React, { Component } from 'react';
import echarts from 'echarts';
// import axios from 'axios';
import './scatterChart.css';

class scatterChart extends Component {
  render() {
    return (
      <div className='scatterChart'>
        <div id='scatterChart'></div>
      </div>
    );
  }

  componentDidMount() {

    var app = {};
    var option = {};

    var originData = require('./scatter.json');
    var myChart = echarts.init(document.getElementById('scatterChart'));

    var indices = {
        name: 0,
        group: 1,
        id: 8
    };
    var schema = [
        {name: 'name', index: 0},
        {name: 'group', index: 1},
        {name: 'PM2.5', index: 2},
        {name: 'PM10', index: 3},
        {name: 'SO2', index: 4},
        {name: 'NO2', index: 5},
        {name: 'CO', index: 6},
        {name: 'O3', index: 7},
        {name: 'id', index: 8}
    ];

    var fieldIndices = schema.reduce(function (obj, item) {
        obj[item.name] = item.index;
        return obj;
    }, {});

    // var groupCategories = [];
    // var groupColors = [];
    var data;

    // zlevel 为 1 的层开启尾迹特效
    myChart.getZr().configLayer(1, {
        motionBlur: 0.5
    });

    data = normalizeData(originData).slice(0, 100);
    myChart.setOption(option = getOption(data));

    function normalizeData(originData) {
        var groupMap = {};
        originData.forEach(function (row) {
            var groupName = row[indices.group];
            if (!groupMap.hasOwnProperty(groupName)) {
                groupMap[groupName] = 1;
            }
        });

        originData.forEach(function (row) {
            row.forEach(function (item, index) {
                if (index !== indices.name
                    && index !== indices.group
                    && index !== indices.id
                ) {
                    // Convert null to zero, as all of them under unit "g".
                    row[index] = parseFloat(item) || 0;
                }
            });
        });

        // for (var groupName in groupMap) {
        //     if (groupMap.hasOwnProperty(groupName)) {
        //         groupCategories.push(groupName);
        //     }
        // }
        // var hStep = Math.round(300 / (groupCategories.length - 1));
        // for (var i = 0; i < groupCategories.length; i++) {
        //     groupColors.push(echarts.color.modifyHSL('#5A94DF', hStep * i));
        // }

        return originData;
    }

    function getOption(data) {

        return {
            backgroundColor: '#2c343c',
            tooltip: {
                // padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1
            },
            xAxis: {
                name: 'PM2.5',
                splitLine: {show: false},
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: 'PM10',
                splitLine: {show: false},
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            // visualMap: [{
            //     show: false,
            //     type: 'piecewise',
            //     categories: groupCategories,
            //     dimension: 2,
            //     inRange: {
            //         color: groupColors //['#d94e5d','#eac736','#50a3ba']
            //     },
            //     outOfRange: {
            //         color: ['#ccc'] //['#d94e5d','#eac736','#50a3ba']
            //     },
            //     top: 20,
            //     textStyle: {
            //         color: '#fff'
            //     },
            //     realtime: false
            // }, {
            //     show: false,
            //     dimension: 3,
            //     max: 1000,
            //     inRange: {
            //         colorLightness: [0.15, 0.6]
            //     }
            // }],
            series: [
                {
                    zlevel: 1,
                    name: 'AQI',
                    type: 'scatter',
                    data: data.map(function (item, idx) {
                        return [item[2], item[3], item[1], idx];
                    }),
                    animationThreshold: 5000,
                    progressiveThreshold: 5000
                }
            ],
            animationEasingUpdate: 'cubicInOut',
            animationDurationUpdate: 2000
        };
    }

    var fieldNames = schema.map(function (item) {
        return item.name;
    }).slice(2);

    app.config = {
        xAxis: 'PM2.5',
        yAxis: 'PM10',
        onChange: function () {
            if (data) {
                myChart.setOption({
                    xAxis: {
                        name: app.config.xAxis
                    },
                    yAxis: {
                        name: app.config.yAxis
                    },
                    series: {
                        data: data.map(function (item, idx) {
                            return [
                                item[fieldIndices[app.config.xAxis]],
                                item[fieldIndices[app.config.yAxis]],
                                item[1],
                                idx
                            ];
                        })
                    }
                });
            }
        }
    };

    app.configParameters = {
        xAxis: {
            options: fieldNames
        },
        yAxis: {
            options: fieldNames
        }
    };


  }
}

export default scatterChart;
