import React, { Component } from 'react';
import '../../scss/air/_diagnosisRecommendationSection.scss';

class diagnosisRecommendationSection extends Component {

  constructor() {
    super();

  }

  render() {

    return (
  	    <div id="diagnosisRecommendationSection">
          <div className='section-title'>
            <div className='section-image'>
              <img src={this.props.diagnosisCause.image} alt=''></img>
            </div>
            <div className='section-title-content'>
              <span>{this.props.diagnosisCause.title}</span>
            </div>
          </div>
          <div className='section-content'>
            <span>{this.props.diagnosisCause.content}</span>
          </div>
  	    </div>
    );
  }


  componentDidMount() {

  }

}

export default diagnosisRecommendationSection;