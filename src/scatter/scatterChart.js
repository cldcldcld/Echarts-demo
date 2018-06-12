import React, { Component } from 'react';
import echarts from 'echarts';
// import axios from 'axios';
import './scatterChart.css';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class scatterChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
        refresh: true
    }

    this.XTitle = 'PM2.5(μg/m3)';
    this.YTitle = 'PM10(μg/m3)';
    this.XTitleWithoutUnit = 'PM2.5';
    this.YTitleWithoutUnit = 'PM10';
    this.data;
    this.fieldIndices;
    this.openYMenu = this.openYMenu.bind(this);
    this.closeYMenu = this.closeYMenu.bind(this);
    this.openXMenu = this.openXMenu.bind(this);
    this.closeXMenu = this.closeXMenu.bind(this);


    this.menuList = ['PM2.5(μg/m3)','PM10(μg/m3)', 'SO2(μg/m3)', 'NO2(μg/m3)', 'CO(mg/m3)', 'O3(μg/m3)'];

    document.onclick = function() {
        // if( e.target.id === 'Y-menu' || e.target.id === 'X-menu') {
        //     return;
        // }
        document.getElementById('Y-menu').className = 'close';
        document.getElementById('X-menu').className = 'close';
    }
  }

  render() {
    const YMenuItem = this.menuList.map((menuItem) =>
        <MenuItem style={styles.menuItem} key={menuItem} onClick={this.closeYMenu}>{menuItem}</MenuItem>
    );
    const XMenuItem = this.menuList.map((menuItem) =>
        <MenuItem style={styles.menuItem} key={menuItem} onClick={this.closeXMenu}>{menuItem}</MenuItem>
    );
    return (
      <div className='scatterChart'>
        <div className='Y-dropdown'>
            <button onClick={this.openYMenu}>{this.YTitle}</button>
            <div id='Y-menu' className='close'>
                <Menu style={styles.YMenu}>
                    {YMenuItem}
                </Menu>
            </div>
        </div>
        <div className='X-dropdown'>
            <button onClick={this.openXMenu}>{this.XTitle}</button>
            <div id='X-menu' className='close'>
                <Menu style={styles.XMenu}>
                    {XMenuItem}
                </Menu>
            </div>
        </div>
        <div id='scatterChart'></div>
      </div>
    );
  }

  componentDidMount() {

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

    this.fieldIndices = fieldIndices;
    // var groupCategories = [];
    // var groupColors = [];
    var data;

    // zlevel 为 1 的层开启尾迹特效
    myChart.getZr().configLayer(1, {
        motionBlur: 0.5
    });

    data = normalizeData(originData).slice(0, 100);
    this.data = data
    myChart.setOption(option = getOption(data, this));

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

    function getOption(data, self) {

        return {
            title: {
                text: [
                        '{titleImage|}{titleContext|污染物相关性分析}'
                      ].join('\n'),
                top: 15,
                left: 15,
                textStyle: {
                    rich: {
                        titleImage: {
                            backgroundColor: {
                                image: require('../image/散点图.png')
                            },
                            height: 25
                        },
                        titleContext: {
                            color: '#FFFFFF',
                            fontFamily: 'PingFangSC-Regular',
                            fontSize: 20,
                            padding: [0,0,0,5]
                        }
                    }
                }
            },
            grid: {
                height: '55%',
                width: '70%',
                y: '30%',
                x: '15%'
            },
            backgroundColor: '#1E314B',
            tooltip: {
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1
            },
            xAxis: {
                splitLine: {show: false},
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                },
                axisLabel: {
                    textStyle: {
                        fontFamily: 'PingFangSC-Regular',
                        fontSize: '12',
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.5)',
                        inside: true
                    }
                }
            },
            yAxis: {
                splitLine: {show: false},
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                },
                axisLabel: {
                    textStyle: {
                        fontFamily: 'PingFangSC-Regular',
                        fontSize: '12',
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.5)',
                        inside: true
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
                        return [
                            item[fieldIndices[self.XTitleWithoutUnit]],
                            item[fieldIndices[self.YTitleWithoutUnit]],
                            item[1],
                            idx
                        ];
                    }),
                    itemStyle: {
                        color: '#22B5C8'
                    },
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

    // app.config = {
    //     xAxis: 'PM2.5',
    //     yAxis: 'PM10',
    //     onChange: function () {
    //         if (data) {
    //             myChart.setOption({
    //                 xAxis: {
    //                     name: app.config.xAxis
    //                 },
    //                 yAxis: {
    //                     name: app.config.yAxis
    //                 },
    //                 series: {
    //                     data: data.map(function (item, idx) {
    //                         return [
    //                             item[fieldIndices[app.config.xAxis]],
    //                             item[fieldIndices[app.config.yAxis]],
    //                             item[1],
    //                             idx
    //                         ];
    //                     })
    //                 }
    //             });
    //         }
    //     }
    // };

    // app.configParameters = {
    //     xAxis: {
    //         options: fieldNames
    //     },
    //     yAxis: {
    //         options: fieldNames
    //     }
    // };
   }

    openYMenu(ev) {
        ev.nativeEvent.stopImmediatePropagation();
        document.getElementById('Y-menu').className = '';
    };

    closeYMenu(ev) {
        var YSelectedItem;
        ev.nativeEvent.stopImmediatePropagation();
        document.getElementById('Y-menu').className = 'close';
        if (ev.target.innerHTML) {
            YSelectedItem = ev.target.innerHTML.substring(0, ev.target.innerHTML.indexOf('('))
        }
        this.YTitle = ev.target.innerHTML;
        this.YTitleWithoutUnit = YSelectedItem;
        this.setState({
            refresh: !this.state.refresh
        });
        this._renderScatterChart(this);
    };

    openXMenu(ev) {
        ev.nativeEvent.stopImmediatePropagation();
        document.getElementById('X-menu').className = '';
    };

    closeXMenu(ev) {
        var XSelectedItem;
        ev.nativeEvent.stopImmediatePropagation();
        document.getElementById('X-menu').className = 'close';
        if (ev.target.innerHTML) {
            XSelectedItem = ev.target.innerHTML.substring(0, ev.target.innerHTML.indexOf('('))
        }
        this.XTitle = ev.target.innerHTML;
        this.XTitleWithoutUnit = XSelectedItem;
        this.setState({
            refresh: !this.state.refresh
        });
        this._renderScatterChart(this);
    };

    _renderScatterChart(self) {
        var myChart = echarts.init(document.getElementById('scatterChart'));
        myChart.setOption({
            series: {
                data: self.data.map(function (item, idx) {
                    return [
                        item[self.fieldIndices[self.XTitleWithoutUnit]],
                        item[self.fieldIndices[self.YTitleWithoutUnit]],
                        item[1],
                        idx
                    ];
                })
            }
        });
    }

}

    const styles = {
        menuItem: {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            fontFamily: 'PingFangSC-Regular',
            fontSize: '14px',
            color: '#FFFFFF',
            opacity: 0.8,
            lineHeight: '20px',
            minHeight: '10px'
        },
        YMenu: {
            paddingTop: '0px'
        },
        XMenu: {
            paddingBottom: '0px'
        }
    };

export default scatterChart;
