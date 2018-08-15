import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VOCSankeyChart from './sankeyChart';
import EmissionIntensity from './emissionIntensity';
// import SpatialDistributionChart from './spatialDistribution';

class airAnalysis extends Component {

  constructor() {
    super();
   
    this.state = {change: true};
    this.backToHome = this.backToHome.bind(this);

  }

  render() {

    return (
  	    <div className="air-analysis">
          <div className='host-button' onClick={this.backToHome}>
              <div className='button-image'>
                  <img src={require('../../image/主页.png')} alt='Home Page'></img>
              </div>
              <div>
                  <span>Home Page</span>
              </div>
          </div>
          <div className='analysis-button' onClick={this.startAnalysis}>
              <button>Start Analyzing</button>
          </div>
          <div className='VOC-sankey-chart'>
            {/*<VOCSankeyChart></VOCSankeyChart>*/}
            <div className='imageA'>
              <img src={require('../../image/sankey.png')} alt='Home Page'></img>
            </div>
          </div>
          <div className='emissiony-intensit-chart'>
            {/*< ></EmissionIntensity>*/}
            <div className='imageB'>
              <img src={require('../../image/emissionIntensity.png')} alt='Home Page'></img>
            </div>
          </div>
          <div className='spatial-distribution-chart'>
            {/*<SpatialDistributionChart></SpatialDistributionChart>*/}
            <div className='imageC'>
              <img src={require('../../image/spatialDistribution.png')} alt='Home Page'></img>
            </div>
          </div>
  	    </div>
    );
  }


  componentDidMount() {

  }

  backToHome() {
    this.props.history.push('/landingpage/Air');
  }

}

export default airAnalysis;