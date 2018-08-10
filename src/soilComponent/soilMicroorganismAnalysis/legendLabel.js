import React, { Component } from 'react';
// import '../../scss/soil/_legendLabel.scss'

class legendLabel extends Component { 

  render() {
    return (
      <div className='legendLabel'>
        <div style={this.props.legendData.color} className='label-img'></div>
        <div className='label-value'>
          <span>{this.props.legendData.title}</span>
        </div>
      </div>
    );
  }

  componentDidMount() {

  }


}

export default legendLabel;
