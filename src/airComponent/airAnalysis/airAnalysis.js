import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SankeyChart from './sankeyChart';

class airAnalysis extends Component {

  constructor() {
    super();
   
    this.state = {change: true};

  }

  render() {

    return (
  	    <div className="air-analysis">
          <SankeyChart></SankeyChart>
  	    </div>
    );
  }


  componentDidMount() {

  }

}

export default airAnalysis;