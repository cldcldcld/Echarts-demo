import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import echarts from 'echarts';
import BMap from 'echarts/extension/bmap/bmap.js';
import LeftList from './LeftList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="main">
        </div>
        <LeftList></LeftList>
      </div>
    );
  }

  componentDidMount() {

    var myChart = echarts.init(document.getElementById('main'));

    // myChart.setOption({
    //     series : [
    //         {
    //             name: '访问来源',
    //             type: 'pie',
    //             radius: '55%',
    //             roseType: 'angle',
    //             data:[
    //                 {value:235, name:'视频广告'},
    //                 {value:274, name:'联盟广告'},
    //                 {value:310, name:'邮件营销'},
    //                 {value:335, name:'直接访问'},
    //                 {value:400, name:'搜索引擎'}
    //             ]
    //         }
    //     ]
    // });
    axios.get('http://echarts.baidu.com/examples/data/asset/data/hangzhou-tracks.json').then(function (data) {

        var points = [].concat.apply([], data.data.map(function (track) {
            return track.map(function (seg) {
                return seg.coord.concat([1]);
            });
        }));
        myChart.setOption({
            animation: false,
            bmap: {
                center: [120.13066322374, 30.240018034923],
                zoom: 14,
                roam: true
            },
            visualMap: {
                show: false,
                top: 'top',
                min: 0,
                max: 5,
                seriesIndex: 0,
                calculable: true,
                inRange: {
                    color: ['blue', 'blue', 'green', 'yellow', 'red']
                }
            },
            series: [{
                type: 'heatmap',
                coordinateSystem: 'bmap',
                data: points,
                pointSize: 5,
                blurSize: 6
            }]
        });
        // if (!app.inNode) {
        //     var bmap = myChart.getModel().getComponent('bmap').getBMap();
        //     bmap.addControl(new BMap.MapTypeControl());
        // }

    });
  }
}

export default App;
