import React, { Component } from 'react';
// import './stationPopup.css';
import AirTrend from './airTrend';
import WaterTrend from './waterTrend';
import SoilTrend from './soilTrend';
import RadiationTrend from './radiationTrend';

class stationPopup extends Component {
  render() {
    const image = this.props.stationInfo.image;

    let chart;
    let index = this.props.index;

    if (this.props.stationInfo.isWarning) {
      index = this.props.index + 100;
    }
    switch(this.props.type)
    {
      case 'Air':
        chart = <AirTrend index={index}></AirTrend>
        break;
      case 'Water':
        chart = <WaterTrend index={index}></WaterTrend>
        break;
      case 'Soil':
        chart = <SoilTrend index={index}></SoilTrend>
        break;
      case 'Radiation':
        chart = <RadiationTrend index={index}></RadiationTrend>
        break;
      default:
        chart = <div></div>
    } 

    const popupImage = !this.props.stationInfo.isWarning ?
     <span className='station-number'>{this.props.stationInfo.stationNumber}</span> : 
     <div className='station-image'>
        <img src={require('../../image/alarmNotice.png')} alt='AlarmNotice'></img>
     </div>

    return (
      <div id='station-popup' className='station-popup'>
        <div className='popup-title'>
          <div className='station-title'>
            {popupImage}
            <span className='station-name'>{this.props.stationInfo.stationName}</span>
          </div>
          <div className='station-details'>
            <span>{this.props.stationInfo.stationLatitude}</span><br/>
            <span>{this.props.stationInfo.stationLongitude}</span><br/>
            <span>{this.props.stationInfo.stationspecialty}</span>
          </div>
          <div className='station-weather'>
            <div className='station-temperature-number'>
              <span>{this.props.stationInfo.stationTemperature}</span>
            </div>
            <div className='station-temperature'>
              <img src={require('../../image/晴转小雨.png')} alt='Clear to Light Rain'></img><br/>
              <span className='station-temperature-degree'>°C</span>
            </div>
          </div>
        </div>
        <div className='popup-content'>
          <div className='station-date'>
            <span>{this.props.stationInfo.month}</span><br/>
            <span>{this.props.stationInfo.year}</span>
          </div>
          <div className='station-img'>
            <img src={image} alt='Data'></img>
          </div>
          <div className='station-AQI-data'>
            {chart}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {


  }

}

export default stationPopup;
