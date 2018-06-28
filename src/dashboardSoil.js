import React, { Component } from 'react';
import './dashboardSoil.css';
import SolilBasicInfo from './soilComponent/soilBasicInfo/soilBasicInfo'
import ChemicalPollutant from './soilComponent/chemicalPollutant/chemicalPollutant'

class dashboardSoil extends Component {

  constructor() {
    super();
    this.state = {change: true};

    this.backToHome = this.backToHome.bind(this);
  }

  render() {

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
              <SolilBasicInfo></SolilBasicInfo>
            </div>
            <div className='soil-quality-info'>
              <ChemicalPollutant></ChemicalPollutant>
            </div>
            <div className='alarm-notification'>
              <ChemicalPollutant></ChemicalPollutant>
            </div>
            <div className='biogenic-element-analysis'>
              <ChemicalPollutant></ChemicalPollutant>
            </div>
          </div>
          <div className='soil-right'>
            <div className='soil-real-data'>
              <ChemicalPollutant></ChemicalPollutant>
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