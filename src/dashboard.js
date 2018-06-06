import React, { Component } from 'react';
import './dashboard.css';
import App from './App'
import RadarChart from './radarImage/radarChart';
import HistogramChart from './histogram/histogramChart';
import HeatMapChart from './heatMap/heatMapChart';
// import GaugeChart from './gauge/gaugeChart';
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
{/*                <div className="gaugeList">
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
                </div>*/}
                <div className="real-time-data">
                    <div className="real-time-data-title">
                        <span>各指标实时数据</span>
                    </div>

                </div>
                <div className="histogram-chart">
                    <HistogramChart></HistogramChart>
                </div>
                <div className="radarAndScatter">
                    <div className="weather-info">

                    </div>
                    <div className="radar-chart">
                        <AQIRadarChart></AQIRadarChart>
                    </div>
                    <div className="scatter-chart">
                        <ScatterChart></ScatterChart>
                    </div>
                </div>
            </div>
      	</div>
    );
  }
}

export default dashboard;