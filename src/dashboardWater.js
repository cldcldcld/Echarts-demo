import React, { Component } from 'react';
import './dashboardWater.css';
import BasicInfo from './waterComponent/basicInfo/basicInfo';
import QualityInfo from './waterComponent/qualityInfo/qualityInfo';
import IndexDependency from './waterComponent/indexDependency/indexDependency';
import RealTimeData from './waterComponent/realTimeData/realTimeData';
import RiverDataAnalysis from './waterComponent/riverDataAnalysis/riverDataAnalysis';
import AlarmInfo from './waterComponent/alarmInfo/alarmInfo';
import ExcessiveIndexAnalysis from './waterComponent/excessiveIndexAnalysis/excessiveIndexAnalysis';
import HistoricDataAnalysis from './waterComponent/historicDataAnalysis/historicDataAnalysis';

class dashboardWater extends Component {

  constructor() {
    super();
    this.state = {change: true};

    this.realDataList = [
        {   
            value: 7.64,
            title: 'Grade I',
            description: 'Dissolved Oxygen (mg/L)',
            warning: false
        },
        {   
            value: 4.12,
            title: 'Grade I',
            description: 'Permanganate Indices (mg/L)',
            warning: false
        },
        {   
            value: 0.159,
            title: 'Grade II',
            description: 'Ammonia Nitrogen (mg/L)',
            warning: false
        },
        {   
            value: 0.04,
            title: 'Grade III',
            description: 'Total Phosphorus (mg/L)',
            warning: true
        },
        {   
            value: 14,
            title: 'Grade I',
            description: 'COD (mg/L)',
            warning: false
        },
        {   
            value: 10.0,
            title: 'Grade II',
            description: 'Transparency',
            warning: false
        },
        {   
            value: 1880,
            title: 'Grade II',
            description: 'Fecal Coliform (unit/L)',
            warning: false
        }
    ];

    this.backToHome = this.backToHome.bind(this);
  }

  render() {

    const realTimeDataComponent = this.realDataList.map((realData) =>
        <div key={realData.description} className="real-time-data-item">
            <RealTimeData realData={realData}></RealTimeData>
        </div>
    );

    return (

      	<div className="dashboardWater">
          <div className='host-button' onClick={this.backToHome}>
            <div className='button-image'>
              <img src={require('./image/主页.png')} alt='Home Page'></img>
            </div>
            <div>
              <span>Home Page</span>
            </div>
          </div>
          <div className="water-dashboard-left">
            <div className="water-basic-info">
              <BasicInfo></BasicInfo>
            </div>
            <div className="water-quality-info">
              <QualityInfo></QualityInfo>
            </div>
            <div className="river-data-analysis">
              <RiverDataAnalysis></RiverDataAnalysis>
            </div>
          </div>
          <div className="water-dashboard-right">
            <div className="water-real-data">
              <div className="water-real-data-title">
                  <div className="water-real-data-image">
                      <img src={require('./image/数据.png')} alt='Data'></img>
                  </div>
                  <div className="water-real-data-title-content">
                      <span>Real-time Data</span>
                  </div>
              </div>
              <div className="water-real-data-value">
                  {realTimeDataComponent}
              </div>            </div>
            <div className="water-index-dependecies">
              <IndexDependency></IndexDependency>
            </div>
            <div className="alarm-info">
              <AlarmInfo></AlarmInfo>
            </div>
            <div className="excessive-index-analysis">
              <ExcessiveIndexAnalysis></ExcessiveIndexAnalysis>
            </div>
            <div className="historic-data-analysis">
              <HistoricDataAnalysis></HistoricDataAnalysis>
            </div>
          </div>
        </div>

    );
  }


  componentDidMount() {


  }

  backToHome() {
    this.props.history.push('/landingpage/Water');
  }

}

export default dashboardWater;