import React, { Component } from 'react';
import './dashboard.css';
import App from './app';
import HistogramChart from './histogram/histogramChart';
// import ConfidenceBandChart from './confidenceBand/confidenceBandChart';
import HeatMapChart from './heatMap/heatMapChart';
// import BaseLineChart from './baseLine/baseLineChart';
import StackLineChart from './stackLine/stackLineChart';
import StandardHistogramChart from './standardHistogram/standardHistogramChart';
import GaugeChart from './gauge/gaugeChart';
import ScatterChart from './scatter/scatterChart';
import AQIRadarChart from './AQIRadar/AQIRadarChart';

class dashboard extends Component {

  render() {
    return (
      	<div className="dashboard">
        	<div className="twenty-percent">
        		<RadarChart></RadarChart>
        	</div>
        	<div className="twenty-percent">
        		<HistogramChart></HistogramChart>
        	</div>
        	<div className="twenty-percent">
        		<HeatMapChart></HeatMapChart>
        	</div>
        	<div className="twenty-percent">
        		<StackLineChart></StackLineChart>
        	</div>
        	<div className="twenty-percent">
        		<StandardHistogramChart></StandardHistogramChart>
        	</div>
        	<div className="twenty-percent">
        		<GaugeChart></GaugeChart>
        	</div>
        	<div className="twenty-percent">
        		<ScatterChart></ScatterChart>
        	</div>
        	<div className="twenty-percent">
        		<AQIRadarChart></AQIRadarChart>
        	</div>
      	</div>
    );
  }
}

export default dashboard;