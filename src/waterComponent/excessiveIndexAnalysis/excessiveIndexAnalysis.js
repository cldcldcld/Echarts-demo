import React, { Component } from 'react';
import './excessiveIndexAnalysis.css';
import echarts from 'echarts';

class excessiveIndexAnalysis extends Component {
  render() {
    return (
      <div className='excessiveIndexAnalysis'>
        <div id='excessiveIndexAnalysis'></div>
      </div>
    );
  }

  componentDidMount() {
    var myChart = echarts.init(document.getElementById('excessiveIndexAnalysis'));

    myChart.setOption({
    
    });


  }


}

export default excessiveIndexAnalysis;
