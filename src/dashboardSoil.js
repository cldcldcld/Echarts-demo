import React, { Component } from 'react';
import './dashboardSoil.css';
import SoilBasicInfo from './soilComponent/soilBasicInfo/soilBasicInfo';
import ChemicalPollutant from './soilComponent/chemicalPollutant/chemicalPollutant';
import SoilQualityInfo from './soilComponent/soilQualityInfo/soilQualityInfo';
import AlarmNotification from './soilComponent/alarmNotification/alarmNotification';
import SoilRealData from './soilComponent/soilRealData/soilRealData';

class dashboardSoil extends Component {

  constructor() {
    super();
    this.state = {change: true};

    this.realDataList = [
        {   
            value: 0.28,
            title: 'Cd'
        },
        {   
            value: 0.28,
            title: 'Hg'
        },
        {   
            value: 35,
            title: 'As'
        },
        {   
            value: 48,
            title: 'Cu'
        },
        {   
            value: 240,
            title: 'Pb'
        },
        {   
            value: 140,
            title: 'Cr'
        },
        {   
            value: 180,
            title: 'Zn'
        },
        {   
            value: 35,
            title: 'Ni'
        },
        {   
            value: 0.45,
            title: 'C6H6CL6'
        },
        {   
            value: 0.46,
            title: 'DDT'
        }
    ];

    this.backToHome = this.backToHome.bind(this);
  }

  render() {

    const realTimeDataComponent = this.realDataList.map((realData) =>
        <div key={realData.title} className="real-time-data-item">
            <SoilRealData realData={realData}></SoilRealData>
        </div>
    );

    return (

        <div className="dashboardSoil">
          <div className='host-button' onClick={this.backToHome}>
            <div className='button-image'>
              <img src={require('./image/主页.png')} alt='Home Page'></img>
            </div>
            <div>
              <span>Home Page</span>
            </div>
          </div>
          {/*<img src={require('./image/soilDashboard.png')} alt='Soil Dashoard'></img>*/}
          <div className='soil-left'>
            <div className='soil-basic-info'>
              <SoilBasicInfo></SoilBasicInfo>
            </div>
            <div className='soil-quality-info'>
              <SoilQualityInfo></SoilQualityInfo>
            </div>
            <div className='alarm-notification'>
              <AlarmNotification></AlarmNotification>
            </div>
            <div className='biogenic-element-analysis'>
              <ChemicalPollutant></ChemicalPollutant>
            </div>
          </div>
          <div className='soil-right'>
            <div className='soil-real-data'>
              <div className="soil-real-data-title">
                  <div className="soil-real-data-image">
                      <img src={require('./image/数据.png')} alt='Data'></img>
                  </div>
                  <div className="soil-real-data-title-content">
                      <span>Real-time Data</span>
                  </div>
              </div>
              <div className="soil-real-data-value">
                  {realTimeDataComponent}
              </div> 
            </div>
            <div className='analysis-details'>
              <div className='chemical-pollutant'>
                <ChemicalPollutant></ChemicalPollutant>
              </div>
              <div className='citywide-soil-quality'>
                <ChemicalPollutant></ChemicalPollutant>
              </div>
            </div>
            <div className='soil-microorganism-analysis'>
              <ChemicalPollutant></ChemicalPollutant>
            </div>
          </div>
        </div>

    );
  }


  componentDidMount() {


  }

  backToHome() {
    this.props.history.push('/landingpage/Soil');
  }

}

export default dashboardSoil;