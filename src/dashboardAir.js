import React, { Component } from 'react';
import './dashboardAir.css';
import App from './App'
import HeatMapChart from './heatMap/heatMapChart';
import ScatterChart from './scatter/scatterChart';
import AQIRadarChart from './AQIRadar/AQIRadarChart';
import RealData from './realData/realData';
import SmoothLineChart from './smoothLine/smoothLineChart';
import WeatherInfo from './weatherInfo/weatherInfo';
import WarningInfo from './warningInfo/warningInfo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class dashboardAir extends Component {

  constructor() {
    super();
    this.state = {change: true};
    this.realDataList = [
        {   
            value: 89,
            title: 'PM2.5',
            description: 'Fine Particles',
            trend: true,
            warning: false
        },
        {   
            value: 269,
            title: 'PM10',
            description: 'Inhalable Particles',
            trend: true,
            warning: true
        },
        {   
            value: 89,
            title: 'NO2',
            description: 'Nitrogen Dioxide',
            trend: true,
            warning: false
        },
        {   
            value: 23,
            title: 'SO2',
            description: 'Sulfur Dioxide',
            trend: false,
            warning: false
        },
        {   
            value: 66,
            title: 'CO',
            description: 'Carbon Monoxide',
            trend: true,
            warning: false
        },
        {   
            value: 8,
            title: 'O3',
            description: 'Ozone',
            trend: false,
            warning: false
        }
    ];

    this.backToHome = this.backToHome.bind(this);
  }

  render() {
    const realDataCompoent = this.realDataList.map((realData) =>
        <div key={realData.title} className="real-data">
            <RealData realData={realData}></RealData>
        </div>
    );

    return (
        <MuiThemeProvider>
      	    <div className="dashboardAir">
                <div className='host-button' onClick={this.backToHome}>
                    <div className='button-image'>
                        <img src={require('./image/主页.png')} alt='Home Page'></img>
                    </div>
                    <div>
                        <span>Home Page</span>
                    </div>
                </div>
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
                    <div className="real-time-data">
                        <div className="real-time-data-title">
                            <div className="real-time-data-image">
                                <img src={require('./image/数据.png')} alt='Data'></img>
                            </div>
                            <div className="real-time-data-title-content">
                                <span>Real-time Data</span>
                            </div>
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
        </MuiThemeProvider>
    );
  }


  componentDidMount() {
    var self = this;

    setInterval(function () {
        var tempValue;
        for (var i = 0; i < self.realDataList.length; i++) {
            tempValue = self.realDataList[i].value;
            self.realDataList[i].value = parseInt(Math.random()*200 + 10, 10);
            self.realDataList[i].trend = self.realDataList[i].value > tempValue ? true : false;
            self.realDataList[i].warning = self.realDataList[i].value > 150 ? true : false;
            self.setState ({
                change: !self.setState.change
            });
        }
    },5000);
  }

  backToHome() {
    this.props.history.push('/landingpage/Air');
  }

}

export default dashboardAir;