import React, { Component } from 'react';
import '../../scss/air/_diagnosisRecommendation.scss';

class diagnosisRecommendation extends Component {

  constructor() {
    super();

  }

  render() {

    return (
  	    <div className="diagnosisRecommendation">
            <div className='diagnosis'>
                <div className='diagnosis-title'>
                    <span>Diagnosis</span>
                </div>
                <div className='diagnosis-content'>
                    <span>During 16:30-18:00, excess pollutant reaches peak value in Jianshe Si Road, Xiaoshan District. The excess pollutant moves north to Binjiang District.</span>
                </div>

            </div>
            <div className='recommendation'>
                <div className='recommendation-title'>
                    <span>Recommendation</span>
                </div>
            </div>
  	    </div>
    );
  }


  componentDidMount() {

  }

}

export default diagnosisRecommendation;