import React, { Component } from 'react';
import utils from '../../utils.js'
// import './stationAdd.css';

class stationAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
        refresh: true,
        stationName: '',
        latitude: '',
        longitude: '',
        elevation: ''
    }

    this.unit = {
      'Air': 'm',
      'Water': 'm',
      'Soil': 'at 20m',
      'Radiation': 'nGy/h'
    }
    this.openModal = this.openModal.bind(this);
    this.inputValid = this.inputValid.bind(this);
    this.addPoint = this.addPoint.bind(this);
    this.validImg = this.validImg.bind(this);
    this.disableClick = this.disableClick.bind(this);

    this.message = 'Please enter station deatils';

    this.valid = {
      'stationNameValid': '',
      'latitudeValid': '',
      'longitudeValid': '',
      'specialtyValid': ''
    }

    document.onclick = function(ev) {
      if (document.getElementById('stationAdd')) {
        document.getElementById('stationAdd').style.right = '-75%';
      }
    }

  }

  render() {
    let specialtyInput;

    switch(this.props.type)
    {
      case 'Air':
        specialtyInput =  <div className='elevation-input'>
                            <label>Elevation</label>
                              {this.validImg(this.valid['specialtyValid'])}
                            <br/>
                            <input placeholder='eg: 12' name='elevation' onChange={this.inputValid} value={this.state.elevation}></input>
                            <span>{this.unit[this.props.type]}</span>
                          </div>
        break;
      case 'Water':
        specialtyInput = <div className='water-level-input'>
                            <label>Water Level</label>
                              {this.validImg(this.valid['specialtyValid'])}
                            <br/>
                            <input placeholder='eg: 10' name='waterLevel' onChange={this.inputValid} value={this.state.waterLevel}></input>
                            <span>{this.unit[this.props.type]}</span>
                          </div>
        break;
      case 'Soil':
        specialtyInput = <div className='soil-moisture-input'>
                            <label>Soil Moisture</label>
                              {this.validImg(this.valid['specialtyValid'])}
                            <br/>
                            <input placeholder='eg: 21.0%' name='soilMoisture' onChange={this.inputValid} value={this.state.soilMoisture}></input>
                            <span>{this.unit[this.props.type]}</span>
                          </div>
        break;
      case 'Radiation':
        specialtyInput = <div className='air-absorbed-dose-rate-input'>
                            <label>Air Absorbed Dose Rate</label>
                              {this.validImg(this.valid['specialtyValid'])}
                            <br/>
                            <input placeholder='eg: 104.2' name='airAbsorbedDoseRate' onChange={this.inputValid} value={this.state.airAbsorbedDoseRate}></input>
                            <span>{this.unit[this.props.type]}</span>
                          </div>
        break;
      default:
        specialtyInput = <div></div>
    }

    return (
      <div id='stationAdd'>
        <div id='add-form' className='add-form' onClick={this.disableClick}>
          <div className='form-title'>
            <span>Add Station</span>
          </div>
          <div id='message' className='message'>
            <span>{this.message}</span>
          </div>
          <div className='form-context'>
            <div className='station-name-input'>
              <label>Station Name</label>
              {this.validImg(this.valid['stationNameValid'])}
              <br/>
              <input placeholder='eg: West Lake' name='stationName' onChange={this.inputValid} value={this.state.stationName}></input>
            </div>
            <div className='longitude-input'>
              <label>Longitude</label>
              {this.validImg(this.valid['longitudeValid'])}
              <br/>
              <input placeholder='eg: 120.104462' name='longitude' onChange={this.inputValid} value={this.state.longitude}></input>
              <span>°E</span>
            </div>
            <div className='latitude-input'>
              <label>Latitude</label>
              {this.validImg(this.valid['latitudeValid'])}
              <br/>
              <input placeholder='eg: 30.305522' name='latitude' onChange={this.inputValid} value={this.state.latitude}></input>
              <span>°N</span>
            </div>
            {specialtyInput}
          </div>
          <div className='submit-button'>
            <button className={this.props.type} onClick={this.addPoint}>
              Add
            </button>
          </div>
        </div>
        <div className='add-button' onClick={this.openModal}>
          <img src={require('../../image/addButton.png')} alt='addButton'></img>
        </div>
      </div>
    );
  }

  disableClick (ev) {
    ev.nativeEvent.stopImmediatePropagation();
    return;
  }

  validImg(flg) {
    var component;
    if (flg !== '' && flg !== undefined) {
      component = flg ? <img className='valid-image' src={require('../../image/validCorrect.png')} alt='correctValid'></img> :
        <img className='valid-image' src={require('../../image/validError.png')} alt='errorValid'></img>
    }
    return component;
  }

  openModal(ev) {
      ev.nativeEvent.stopImmediatePropagation();
      if (document.getElementById('stationAdd').style.right !== '-75%') {
        document.getElementById('stationAdd').style.right = '-75%';
      } else {
        document.getElementById('stationAdd').style.right = 0;
      }
  };

  inputValid(ev) {
      ev.nativeEvent.stopImmediatePropagation();
      switch(ev.target.name)
      {
        case 'stationName':
          this.valid['stationNameValid'] = ev.target.value ? utils.isString(ev.target.value) : '';
          break;
        case 'latitude':
          this.valid['latitudeValid'] = ev.target.value ? utils.isNumber(ev.target.value) : '';
          break;
        case 'longitude':
          this.valid['longitudeValid'] = ev.target.value ? utils.isNumber(ev.target.value) : '';
          break;
        case 'elevation':
        case 'waterLevel':
        case 'soilMoisture':
        case 'airAbsorbedDoseRate':
          this.valid['specialtyValid'] = ev.target.value ? utils.isNumber(ev.target.value) : '';
          break;
        default:
          break;
      }
      this.setState({
        [ev.target.name]: ev.target.value
      });
  };

  addPoint(ev) {
    var sumbitData = {};

    if (this.vaildObject(this.valid)) {
      sumbitData = {
        location: {
          text: '',
          location: this.state.longitude + ',' + this.state.latitude
        },
        locationDetails: {
          stationNumber: '11',
          stationName: this.state.stationName,
          stationLatitude: 'Latitude: ' + this.state.latitude + '°N',
          stationLongitude: 'Longitude: ' + this.state.latitude + '°E',
          stationspecialty: this.state.elevation + this.unit[this.props.type],
          stationTemperature: '31',
          image: require('../../image/sanyiRadiation.jpg'),
          month: 'June 1st',
          year: '2018'
        }
      }
      this.props.addMapPoint(sumbitData);
      this.valid = {
        'stationNameValid': '',
        'latitudeValid': '',
        'longitudeValid': '',
        'specialtyValid': ''
      };
      this.setState({
        stationName: '',
        latitude: '',
        longitude: '',
        elevation: ''
      });
      document.getElementById('stationAdd').style.right = '-75%';
    } else {
      document.getElementById('message').className='message warning-red'
      this.message = 'Data is not correct, please check';
      this.setState({
        refresh: !this.state.refresh
      });
    }

  }

  vaildObject(object) {
    for (var item in object) {
      if (object[item] === '' && !object[item]) {
        return false;
      }
    }

    return true;
  }

  componentDidMount() {


  }

}

export default stationAdd;
