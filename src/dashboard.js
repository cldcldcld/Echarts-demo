import React, { Component } from 'react';
import './dashboard.css';
import App from './App'
import RadarChart from './radarImage/radarChart';
// import HistogramChart from './histogram/histogramChart';
import HeatMapChart from './heatMap/heatMapChart';
// import GaugeChart from './gauge/gaugeChart';
import ScatterChart from './scatter/scatterChart';
import AQIRadarChart from './AQIRadar/AQIRadarChart';
import RealData from './realData/realData';
import SmoothLineChart from './smoothLine/smoothLineChart';
import WeatherInfo from './weatherInfo/weatherInfo';
import WarningInfo from './warningInfo/warningInfo';

class dashboard extends Component {

  render() {
    var realDataList = [
        {   
            value: 89,
            title: 'PM2.5',
            description: '细颗粒物'
        },
        {   
            value: 89,
            title: 'PM10',
            description: '可吸入颗粒物'
        },
        {   
            value: 89,
            title: 'NO2',
            description: '二氧化氮'
        },
        {   
            value: 89,
            title: 'SO2',
            description: '二氧化硫'
        },
        {   
            value: 89,
            title: 'CO',
            description: '一氧化碳'
        },
        {   
            value: 89,
            title: 'O3',
            description: '臭氧'
        }
    ];
    const realDataCompoent = realDataList.map((realData) =>
        <div key={realData.title} className="real-data">
            <RealData realData={realData}></RealData>
        </div>
    );
    return (
      	<div className="dashboard">
            <div className="left">
                <div className="weather-info">
                    <WeatherInfo></WeatherInfo>
                </div>
                <div className="map">
                    <App></App>
                </div>
                <div className="warning-info">
                    <WarningInfo></WarningInfo>
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
                    <div className="real-time-data-value">
                        {realDataCompoent}
                    </div>

                </div>
                <div className="histogram-chart">
                    <SmoothLineChart></SmoothLineChart>
                </div>
                <div className="radarAndScatter">
                    <div className="radar-chart">
                        <AQIRadarChart></AQIRadarChart>
                    </div>
                    <div className="heat-table">
                        <HeatMapChart></HeatMapChart>
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