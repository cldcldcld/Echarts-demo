import React, { Component } from 'react';
import './dashboardSoil.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class dashboardSoil extends Component {

  constructor() {
    super();
    this.state = {change: true};

    this.backToHome = this.backToHome.bind(this);
  }

  render() {

    return (

      	<div className="dashboardSoil">
            <MuiThemeProvider>
 
            </MuiThemeProvider>
      	</div>
    );
  }


  componentDidMount() {


  }

  backToHome() {
    this.props.history.push('/');
  }

}

export default dashboardSoil;