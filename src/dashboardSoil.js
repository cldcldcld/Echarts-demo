import React, { Component } from 'react';
import './dashboardSoil.css';

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
          <img src={require('./image/soilDashboard.png')} alt='Soil Dashoard'></img>
          <div className='soil-left'>
            <div className='soil-basic-info'>
            </div>
            <div className='soil-quality-info'>
            </div>
            <div className='alarm-notification'>
            </div>
            <div className='biogenic-element-analysis'>
            </div>
          </div>
          <div className='soil-right'>
            <div className='soil-real-data'>
            </div>
            <div className='analysis-details'>
              <div className='chemical-pollutant'>
              </div>
              <div className='citywide-soil-quality'>
              </div>
            </div>
            <div className='soil-microorganism-analysis'>
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