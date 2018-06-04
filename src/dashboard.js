import React, { Component } from 'react';
import './dashboard.css';
import App from './App'
import RadarChart from './radarImage/radarChart';
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
            <div className="left">
                <div className="map">
                    <App></App>
                </div>
                <div className="heat-table">
                    <HeatMapChart></HeatMapChart>
                </div>
            </div>
            <div className="right">
                <div className="gaugeList">
                    <div className="gauge">
                        <GaugeChart idName={'gauge1'}></GaugeChart>
                    </div>
                    <div className="gauge">
                        <GaugeChart idName={'gauge2'}></GaugeChart>
                    </div>
                    <div className="gauge">
                        <GaugeChart idName={'gauge3'}></GaugeChart>
                    </div>
                    <div className="gauge">
                        <GaugeChart idName={'gauge4'}></GaugeChart>
                    </div>
                    <div className="gauge">
                        <GaugeChart idName={'gauge5'}></GaugeChart>
                    </div>
                    <div className="gauge">
                        <GaugeChart idName={'gauge6'}></GaugeChart>
                    </div>
                </div>
                <div className="histogram-chart">
                    <HistogramChart></HistogramChart>
                </div>
                <div className="radarAndScatter">
                    <div className="radar-chart">
                        <AQIRadarChart></AQIRadarChart>
                    </div>
                    <div className="scatter-chart">
                        <ScatterChart></ScatterChart>
                    </div>
                </div>
            </div>
        	{/*<div className="twenty-percent">
        		<RadarChart></RadarChart>
        	</div>
        	<div className="twenty-percent">
        		<HistogramChart></HistogramChart>
        	</div>
        	<div className="twenty-percent">
        		<StackLineChart></StackLineChart>
        	</div>
        	<div className="twenty-percent">
        		<StandardHistogramChart></StandardHistogramChart>
        	</div>
        	<div className="twenty-percent">
        		<ScatterChart></ScatterChart>
        	</div>
        	<div className="twenty-percent">
        		<AQIRadarChart></AQIRadarChart>
        	</div>*/}
      	</div>
    );
  }
}

export default dashboard;