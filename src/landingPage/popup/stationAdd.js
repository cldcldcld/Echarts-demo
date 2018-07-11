import React, { Component } from 'react';
import './stationAdd.css';

class stationAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
        refresh: true
    }

    this.openModal = this.openModal.bind(this);
    this.inputBlur = this.inputBlur.bind(this);

  }

  render() {
    let chart;
    let index = this.props.index;

    return (
      <div id='stationAdd'>
        <div className='add-form'>
          <div className='form-title'>
            <span>Add Station</span>
          </div>
          <div className='form-context'>
            <div className='station-name-input'>
              <label>Station name</label><br/>
              <input name='station-name' onBlur=''></input>
            </div>
            <div className='latitude-input'>
              <label>Latitude</label><br/>
              <input name='latitude'></input>
              <span>°N</span>
            </div>
            <div className='longitude-input'>
              <label>Longitude</label><br/>
              <input name='longitude'></input>
              <span>°E</span>
            </div>
            <div className='elevation-input'>
              <label>Elevation</label><br/>
              <input name='elevation'></input>
              <span>m</span>
            </div>
          </div>
          <div className='submit-button'>
            <button>
              <span>Add</span>
            </button>
          </div>
        </div>
        <div className='add-button' onClick={this.openModal}>
          <img src={require('../../image/addButton.png')} alt='addButton'></img>
        </div>
      </div>
    );
  }

  openModal(ev) {
      ev.nativeEvent.stopImmediatePropagation();
      if (document.getElementById('stationAdd').style.right != '-80% ') {
        document.getElementById('stationAdd').style.right = '-80%';
      } else {
        document.getElementById('stationAdd').style.right = 0;
      }
  };

  componentDidMount() {


  }

}

export default stationAdd;
