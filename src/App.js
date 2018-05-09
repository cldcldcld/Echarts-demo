import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="main">
        </div>
      </div>
    );
  }

  componentDidMount() {
    var echarts = require('echarts');

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                roseType: 'angle',
                data:[
                    {value:235, name:'视频广告'},
                    {value:274, name:'联盟广告'},
                    {value:310, name:'邮件营销'},
                    {value:335, name:'直接访问'},
                    {value:400, name:'搜索引擎'}
                ]
            }
        ]
    });
  }
}

export default App;
