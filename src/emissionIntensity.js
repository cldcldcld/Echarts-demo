import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class emissionIntensity extends Component {

  constructor() {
    super();
   
    this.state = {change: true};

  }

  render() {

    return (
      <div className='emission-intensity'> 
        <div id='emissionIntensity'>11111</div>
      </div>
    );
  }


  componentDidMount() {

  }

}

export default emissionIntensity;