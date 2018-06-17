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

      	<div className="dashboardWater">
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

export default dashboardWater;