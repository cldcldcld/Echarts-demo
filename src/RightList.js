import React, { Component } from 'react';
import './RightList.css';
import echarts from 'echarts';

class RightList extends Component {
  render() {
    return (
      <div className="pie">
        <div id="chart"></div>
      </div>
    );
  }

  componentDidMount() {

    var myChart = echarts.init(document.getElementById('chart'));

    myChart.setOption({
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                roseType: 'angle',
                data:[
                    {value:235, name:'Site A'},
                    {value:274, name:'Site B'},
                    {value:310, name:'Site C'},
                    {value:335, name:'Site D'},
                    {value:400, name:'Site E'}
                ]
            }
        ]
    });
  }
}

export default RightList;
