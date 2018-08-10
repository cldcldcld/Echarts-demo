import React, { Component } from 'react';
import echarts from 'echarts';

class gaugeChart extends Component {
  render() {
    return (
      <div className='gaugeChart'>
        <div className='gauge-chart' id={this.props.idName}></div>
      </div>
    );
  }

  componentDidMount() {

    var myChart = echarts.init(document.getElementById(this.props.idName));

    var option = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '业务指标',
                type: 'gauge',
                detail: {formatter:'{value}%'},
                data: [{value: 50, name: '完成率'}]
            }
        ]
    }
    myChart.setOption(option);

    setInterval(function () {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        myChart.setOption(option, true);
    },2000);

    setTimeout(function(){
      myChart.resize();
    }, 10)
  }
}

export default gaugeChart;
