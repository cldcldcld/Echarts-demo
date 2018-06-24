import React, { Component } from 'react';
import './dashboardWater.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class dashboardWater extends Component {

  constructor() {
    super();
    this.state = {change: true};

    this.backToHome = this.backToHome.bind(this);
  }

  render() {

    return (

      <MuiThemeProvider>
      	<div className="dashboardWater">
          <div className='host-button' onClick={this.backToHome}>
            <div className='button-image'>
              <img src={require('./image/主页.png')} alt='Home Page'></img>
            </div>
            <div>
              <span>Home Page</span>
            </div>
          </div>
          <img src={require('./image/waterDashboard.png')}></img>
        </div>
      </MuiThemeProvider>

    );
  }


  componentDidMount() {


  }

  backToHome() {
    this.props.history.push('/landingpage/Water');
  }

}

export default dashboardWater;