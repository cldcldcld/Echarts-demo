import React, { Component } from 'react';
import './historicDataAnalysis.css';
import echarts from 'echarts';

class historicDataAnalysis extends Component {
  render() {
    return (
      <div className='historicDataAnalysis'>
        <div id='historicDataAnalysis'></div>
      </div>
    );
  }

  componentDidMount() {
    var myChart = echarts.init(document.getElementById('historicDataAnalysis'));

    myChart.setOption({
    
    });


  }


}

export default historicDataAnalysis;
