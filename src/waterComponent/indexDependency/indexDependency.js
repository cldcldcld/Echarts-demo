import React, { Component } from 'react';
import './indexDependency.css';
import echarts from 'echarts';

class indexDependency extends Component {
  render() {
    return (
      <div className='indexDependency'>
        <div id='indexDependency'></div>
      </div>
    );
  }

  componentDidMount() {
    var myChart = echarts.init(document.getElementById('indexDependency'));

    var json = require('./indexData.json');
    myChart.hideLoading();
    myChart.setOption({
        title: {
            text: [
                    '{titleImage|}{titleContext|Water Quality Index Dependencies}'
                  ].join('\n'),
            // left: 'left',
            top: 15,
            left: 15,
            textStyle: {
                rich: {
                    titleImage: {
                        backgroundColor: {
                            image: require('../../image/数据分析-2.png')
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
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                type: 'graph',
                layout: 'none',
                // progressiveThreshold: 700,
                data: json.nodes.map(function (node) {
                    return {
                        x: node.x,
                        y: node.y,
                        id: node.id,
                        name: node.label,
                        symbolSize: node.size,
                        itemStyle: {
                            normal: {
                                color: node.color
                            }
                        }
                    };
                }),
                edges: json.edges.map(function (edge) {
                    return {
                        source: edge.sourceID,
                        target: edge.targetID
                    };
                }),
                label: {
                    emphasis: {
                        position: 'right',
                        show: true
                    }
                },
                roam: true,
                focusNodeAdjacency: true,
                lineStyle: {
                    normal: {
                        width: 0.5,
                        curveness: 0.3,
                        opacity: 0.7
                    }
                }
            }
        ]
    }, true);


  }


}

export default indexDependency;
