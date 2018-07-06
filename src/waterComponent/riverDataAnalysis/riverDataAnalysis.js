import React, { Component } from 'react';
import './riverDataAnalysis.css';
import echarts from 'echarts';

class riverDataAnalysis extends Component {
  render() {
    return (
      <div className='riverDataAnalysis'>
        <div id='riverDataAnalysis'></div>
      </div>
    );
  }

  componentDidMount() {
    var myChart = echarts.init(document.getElementById('riverDataAnalysis'));

    var indices = {
        name: 0,
        group: 1,
        id: 16
    };
    var schema = [
        {name: 'name', index: 0},
        {name: 'BOD', index: 1},
        {name: 'protein', index: 2},
        {name: 'COD', index: 3},
        {name: 'DO', index: 4},
        {name: 'pH', index: 5},
        {name: 'NH3-N', index: 6},
        {name: 'KMnO4', index: 7},
        {name: 'N', index: 8},
        {name: 'P', index: 9},
        {name: 'Cu', index: 10},
        {name: 'Pb', index: 11},
        {name: 'SO', index: 12},
        {name: 'Cl', index: 13},
        {name: 'Hg', index: 14},
        {name: 'F', index: 15},
        {name: 'id', index: 16}
    ];

    var groupCategories = [];
    var groupColors = [];

    var data = require('./riverData.json');
    normalizeData(data);

    myChart.setOption(getOption(data));



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

        for (var groupName in groupMap) {
            if (groupMap.hasOwnProperty(groupName)) {
                groupCategories.push(groupName);
            }
        }
        var hStep = Math.round(300 / (groupCategories.length - 1));
        for (var i = 0; i < groupCategories.length; i++) {
            groupColors.push(echarts.color.modifyHSL('#5A94DF', hStep * i));
        }
    }

    function getOption(data) {

        var lineStyle = {
            normal: {
                width: 0.5,
                opacity: 0.05
            }
        };

        return {
            backgroundColor: '#1E314B',
            title: {
                text: [
                        '{titleImage|}{titleContext|Fuchun River Big Data Analysis}'
                      ].join('\n'),
                // left: 'left',
                top: 10,
                left: 15,
                textStyle: {
                    rich: {
                        titleImage: {
                            backgroundColor: {
                                image: require('../../image/parallelIcon.png')
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
            visualMap: {
                show: true,
                type: 'piecewise',
                categories: groupCategories,
                dimension: indices.group,
                inRange: {
                    color: groupColors //['#d94e5d','#eac736','#50a3ba']
                },
                outOfRange: {
                    color: ['#ccc'] //['#d94e5d','#eac736','#50a3ba']
                },
                height: '70%',
                width: '85%',
                top: 105,
                left: 40,
                textStyle: {
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: 14
                },
                realtime: false
            },
            parallelAxis: [
                {dim: 16, name: schema[16].name, scale: true, nameLocation: 'end'},
                {dim: 2, name: schema[2].name, nameLocation: 'end'},
                {dim: 4, name: schema[4].name, nameLocation: 'end'},
                {dim: 3, name: schema[3].name, nameLocation: 'end'},
                {dim: 5, name: schema[5].name, nameLocation: 'end'},
                {dim: 6, name: schema[6].name, nameLocation: 'end'},
                {dim: 7, name: schema[7].name, nameLocation: 'end'},
                {dim: 8, name: schema[8].name, nameLocation: 'end'},
                {dim: 9, name: schema[9].name, nameLocation: 'end'},
                {dim: 10, name: schema[10].name, nameLocation: 'end'},
                {dim: 11, name: schema[11].name, nameLocation: 'end'},
                {dim: 12, name: schema[12].name, nameLocation: 'end'},
                {dim: 13, name: schema[13].name, nameLocation: 'end'},
                {dim: 14, name: schema[14].name, nameLocation: 'end'},
                {dim: 15, name: schema[15].name, nameLocation: 'end'}
            ],
            parallel: {
                left: 250,
                top: 80,
                width: 400,
                layout: 'vertical',
                parallelAxisDefault: {
                    type: 'value',
                    nameLocation: 'end',
                    nameGap: 80,
                    nameTextStyle: {
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: 14
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#aaa'
                        }
                    },
                    axisTick: {
                        lineStyle: {
                            color: '#777'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    realtime: false
                }
            },
            animation: false,
            series: [
                {
                    type: 'parallel',
                    lineStyle: lineStyle,
                    inactiveOpacity: 0,
                    activeOpacity: 0.01,
                    progressive: 500,
                    smooth: true,
                    data: data
                }
            ]
        };
    }

  }


}

export default riverDataAnalysis;
