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