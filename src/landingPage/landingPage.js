import React, { Component } from 'react';
import './landingPage.css';
import {Map, MarkerList} from 'react-bmap';
import StationPopup from './popup/stationPopup'

class landingPage extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    
    this.hasAnimation = true;

    this.stationInfo = {
      'Air': [
        {

        },
        {
          stationNumber: '01',
          stationName: 'Binjiang Air Station',
          stationLatitude: 'Latitude: 30.283677 °N',
          stationLongitude: 'Longitude: 120.193601 °E',
          stationspecialty: 'Elevation: 9 m',
          stationTemperature: '31',
          image: require('../image/airStation1.png'),
          month: 'May 1st',
          year: '2018'
        },
        {
          stationNumber: '02',
          stationName: 'Xinfeng Station',
          stationLatitude: 'Latitude: 30.300891 °N',
          stationLongitude: 'Longitude: 120.211423 °E',
          stationspecialty: 'Elevation: 7 m',
          stationTemperature: '31',
          image: require('../image/air浙大.png'),
          month: 'May 1st',
          year: '2018'
        },
        {
          stationNumber: '03',
          stationName: 'ZJU Station',
          stationLatitude: 'Latitude: 30.28243 °N',
          stationLongitude: 'Longitude: 120.148758 °E',
          stationspecialty: 'Elevation: 14 m',
          stationTemperature: '31',
          image: require('../image/air西溪.png'),
          month: 'May 1st',
          year: '2018'
        },
        {
          stationNumber: '04',
          stationName: 'Xixi Station',
          stationLatitude: 'Latitude: 30.270952 °N',
          stationLongitude: 'Longitude: 120.049872 °E',
          stationspecialty: 'Elevation: 18 m',
          stationTemperature: '31',
          image: require('../image/air西溪3.png'),
          month: 'May 1st',
          year: '2018'
        }
      ],
      'Water': [
        {
          stationNumber: '01',
          stationName: 'Fuchun River',
          stationLatitude: 'Latitude: 30.06116 °N',
          stationLongitude: 'Longitude: 119.984286 °E',
          stationspecialty: 'Water Level: 20m',
          stationTemperature: '31',
          image: require('../image/waterStation1.png'),
          month: 'July 1st',
          year: '2018'
        },
        {
          stationNumber: '02',
          stationName: 'Zhong River',
          stationLatitude: 'Latitude: 30.238553 °N',
          stationLongitude: 'Longitude: 120.167198 °E',
          stationspecialty: 'Water Level: 6.3m',
          stationTemperature: '31',
          image: require('../image/water富春江.png'),
          month: 'May 1st',
          year: '2018'
        },
        {
          stationNumber: '03',
          stationName: 'Xintang River',
          stationLatitude: 'Latitude: 30.238714 °N',
          stationLongitude: 'Longitude: 120.199456 °E',
          stationspecialty: 'Water Level: 4.2m',
          stationTemperature: '31',
          image: require('../image/water富春江2.png'),
          month: 'May 1st',
          year: '2018'
        },
        {
          stationNumber: '04',
          stationName: 'Tiesha River',
          stationLatitude: 'Latitude: 30.257119 °N',
          stationLongitude: 'Longitude: 120.182942 °E',
          stationspecialty: 'Water Level: 10m',
          stationTemperature: '31',
          image: require('../image/Water西溪.png'),
          month: 'May 1st',
          year: '2018'
        }
      ],
      'Soil': [
        {
          stationNumber: '01',
          stationName: 'Wushan Station',
          stationLatitude: 'Latitude: 30.233516 °N',
          stationLongitude: 'Longitude: 120.16773 °E',
          stationspecialty: 'Soil Moisture: 16.5% at 20 m',
          stationTemperature: '31',
          image: require('../image/soilStation1.png'),
          month: 'June 1st',
          year: '2018'
        },
        {
          stationNumber: '02',
          stationName: 'Daqingli Station',
          stationLatitude: 'Latitude: 30.211048 °N',
          stationLongitude: 'Longitude: 120.086667 °E',
          stationspecialty: 'Soil Moisture: 20.3% at 20 m',
          stationTemperature: '31',
          image: require('../image/soil吴山路.png'),
          month: 'June 1st',
          year: '2018'
        },
        {
          stationNumber: '03',
          stationName: 'Xixi Station',
          stationLatitude: 'Latitude: 30.280933 °N',
          stationLongitude: 'Longitude: 120.075743 °E',
          stationspecialty: 'Soil Moisture: 21.0% at 20 m',
          stationTemperature: '31',
          image: require('../image/soilXixi.png'),
          month: 'June 1st',
          year: '2018'
        },
        {
          stationNumber: '04',
          stationName: 'Binsheng Station',
          stationLatitude: 'Latitude: 30.223531 °N',
          stationLongitude: 'Longitude: 120.226371 °E',
          stationspecialty: 'Soil Moisture: 16.2% at 20 m',
          stationTemperature: '31',
          image: require('../image/西溪soil.png'),
          month: 'June 1st',
          year: '2018'
        }
      ],
      'Radiation': [
        {
          stationNumber: '01',
          stationName: 'Provincial Radiation',
          stationLatitude: 'Latitude: 30.233516 °N',
          stationLongitude: 'Longitude: 120.16773 °E',
          stationspecialty: 'Air Absorbed Dose Rate: 104.2 nGy/h',
          stationTemperature: '31',
          image: require('../image/provincialRadiation.jpg'),
          month: 'June 1st',
          year: '2018'
        },
        {
          stationNumber: '02',
          stationName: 'West Lake',
          stationLatitude: 'Latitude: 30.211048 °N',
          stationLongitude: 'Longitude: 120.086667 °E',
          stationspecialty: 'Air Absorbed Dose Rate: 94.2 nGy/h',
          stationTemperature: '31',
          image: require('../image/westLakeRadiation.jpg'),
          month: 'June 1st',
          year: '2018'
        },
        {
          stationNumber: '03',
          stationName: 'Xiaoshan Station',
          stationLatitude: 'Latitude: 30.280933 °N',
          stationLongitude: 'Longitude: 120.075743 °E',
          stationspecialty: 'Air Absorbed Dose Rate: 72.8 nGy/h',
          stationTemperature: '31',
          image: require('../image/xiaoshanRadiation.jpg'),
          month: 'June 1st',
          year: '2018'
        },
        {
          stationNumber: '04',
          stationName: 'Sanyi Station',
          stationLatitude: 'Latitude: 30.223531 °N',
          stationLongitude: 'Longitude: 120.226371 °E',
          stationspecialty: 'Air Absorbed Dose Rate: 113.5 nGy/h',
          stationTemperature: '31',
          image: require('../image/sanyiRadiation.jpg'),
          month: 'June 1st',
          year: '2018'
        }
      ]     
    }

    this.stationLocation = { 
      'Air': [
        {
          text: '',
          location: ''
        },
        {
          text: '',
          location: '120.193601,30.283677'
        }, 
        {
          text: '',
          location: '120.211423,30.300891'
        },
        {
          text: '',
          location: '120.148758,30.28243'
        },
        {
          text: '',
          location: '120.049872,30.270952'
        },
        {
          text: '',
          location: '120.157381,30.328326'
        },
        {
          text: '',
          location: '120.285013,30.326331'
        },
        {
          text: '',
          location: '120.116562,30.227525'
        },
        {
          text: '',
          location: '120.201075,30.236012'
        },
        {
          text: '',
          location: '120.038661,30.122622'
        }
      ],
      'Water': [
        {
          text: '',
          location: '119.984286,30.06116'
        },
        {
          text: '',
          location: '120.167198,30.238553'
        },
        {
          text: '',
          location: '120.199456,30.238714'
        },
        {
          text: '',
          location: '120.182942,30.257119'
        },
        {
          text: '',
          location: '120.1776462793,30.3084206024'
        },
        {
          text: '',
          location: '120.13442,30.316362'
        },
        {
          text: '',
          location: '120.201127,30.039091'
        },
        {
          text: '',
          location: '120.226914,30.217625'
        },
        {
          text: '',
          location: '120.2994732351,30.3069873184'
        },
        {
          text: '',
          location: '119.741787,30.273836'
        }
      ],
      'Soil': [
        {
          text: '',
          location: '120.16773,30.233516'
        },
        {
          text: '',
          location: '120.086667,30.211048'
        }, 
        {
          text: '',
          location: '120.075743,30.280933'
        },
        {
          text: '',
          location: '120.226371,30.223531'
        }, 
        {
          text: '',
          location: '120.221772,30.324835'
        },
        {
          text: '',
          location: '120.16888,30.316854'
        },
        {
          text: '',
          location: '120.321807,30.268956'
        },
        {
          text: '',
          location: '120.031475,30.127369'
        },
        {
          text: '',
          location: '120.433916,30.183329'
        },
        {
          text: '',
          location: '120.243044,30.282929'
        }
      ],
      'Radiation': [
        {
          text: '',
          location: '120.12708,30.294341'
        },
        {
          text: '',
          location: '120.24029,30.375995'
        }, 
        {
          text: '',
          location: '120.075743,30.280933'
        },
        {
          text: '',
          location: '120.287887,30.195566'
        }, 
        {
          text: '',
          location: '120.211423,30.300891'
        },
        {
          text: '',
          location: '120.285013,30.326331'
        },
        {
          text: '',
          location: '120.321807,30.268956'
        },
        {
          text: '',
          location: '120.031475,30.127369'
        },
        {
          text: '',
          location: '120.086667,30.211048'
        },
        {
          text: '',
          location: '120.243044,30.282929'
        }
      ]
    }

    this.warningList = [
      {
        text: '',
        location: '120.165431,30.175946'
      }
    ]

    this.warningStation = [
      {
        isWarning: true,
        stationNumber: '01',
        stationName: 'Binjiang Air Station',
        stationLatitude: 'Latitude: 30.283677 °N',
        stationLongitude: 'Longitude: 120.193601 °E',
        stationspecialty: 'Elevation: 9 m',
        stationTemperature: '31',
        image: require('../image/airStation1.png'),
        month: 'May 1st',
        year: '2018'
      }
    ]

    this.colorObj = {
      'Air': '#55DDEE',
      'Water': '#9885FE',
      'Soil': '#FFE08C',
      'Radiation': '#55FFA5'
    }

    this.state = {
        type: this.props.match.params.type ? this.props.match.params.type : 'Air'
    }

  }  

  render() {

    const stationInfo = this.stationInfo[this.state.type];
    const pointLocation = this.stationLocation[this.state.type];
    const color = this.colorObj[this.state.type];

    const pointPopUpComponent = stationInfo.map((item, index) =>
        <div key={index} className='hide point-pop-up' id={'index-' + index}>
            <StationPopup type={this.state.type} stationInfo={item} index={index}></StationPopup>
        </div>
    );

    const warningPopUpComponent = this.warningStation.map((item, index) =>
        <div key={index} className='hide point-pop-up' id={'warningIndex-' + index}>
            <StationPopup type={this.state.type} stationInfo={item} index={index}></StationPopup>
        </div>
    );

    const markList = <MarkerList 
                        data={pointLocation}
                        fillStyle={color}
                        animation={this.hasAnimation}
                        isShowShadow={false} 
                        multiple={false} 
                        autoViewport={false}
                        onClick={this.handleClick}
                        onMouseOver={this.handleMouseOver}
                        onMouseOut={this.handleMouseOut}
                      />

    const warningList = this.state.type === 'Air' ? <MarkerList 
                        data={this.warningList}
                        fillStyle={'#FF2929'}
                        animation={this.hasAnimation} 
                        isShowShadow={false}
                        multiple={false} 
                        autoViewport={false}
                        onClick={this.handleClick}
                        onMouseOver={this.handleWarningMouseOver}
                        onMouseOut={this.handleWarningMouseOut}
                        /> : <div></div>

    return (
        <div id='map-container' className='map-container'>
          <div className='navigation-button'>
            <div onClick={this.buttonClick} className='air-button selected' id='Air' name='button-select'>
              <img src={require('../image/air.png')} alt='Air'></img><br/>
              <span>Air Quality</span>
            </div>
            <div onClick={this.buttonClick} className='water-button' id='Water' name='button-select'>
              <img src={require('../image/water.png')} alt='Water'></img><br/>
              <span>Water Quality</span>
            </div>
            <div onClick={this.buttonClick} className='soil-button' id='Soil' name='button-select'>
              <img src={require('../image/soil.png')} alt='Soil'></img><br/>
              <span>Solid Quality</span>
            </div>
            <div onClick={this.buttonClick} className='radiation-button' id='Radiation' name='button-select'>
              <img src={require('../image/Radiation.png')} alt='Radiation'></img><br/>
              <span>Radiation</span>
            </div>
          </div>
          <Map style={styles.mapContainer} mapStyle={mapStyles} center={{lng: 120.153601, lat: 30.223677}} zoom='12'>
            {markList}
            {warningList}
          </Map>
          {pointPopUpComponent}
          {warningPopUpComponent}
        </div>
    );
  }

  handleClick(number) {
    this.props.history.push('/dashboard' + this.state.type);
  }

  handleMouseOver(number) {
    var styles;
    if (document.getElementById('index-' + number)) {
      styles = document.getElementById('index-' + number).style;
      styles.top = event.target.offsetTop - 330 + document.body.offsetHeight * 0.03 + 'px';
      styles.left = event.target.offsetLeft -30 + document.body.offsetWidth * 0.03 + 'px';
      document.getElementById('index-' + number).className = 'point-pop-up';
    }
  }

  handleWarningMouseOver(number) {
    var styles;
    if (document.getElementById('warningIndex-' + number)) {
      styles = document.getElementById('warningIndex-' + number).style;
      styles.top = event.target.offsetTop - 330 + document.body.offsetHeight * 0.03 + 'px';
      styles.left = event.target.offsetLeft -30 + document.body.offsetWidth * 0.03 + 'px';
      document.getElementById('warningIndex-' + number).className = 'point-pop-up';
    }
  }

  handleWarningMouseOut(number) {
    if (document.getElementById('warningIndex-' + number)) {
      document.getElementById('warningIndex-' + number).className = 'hide point-pop-up';
    }
  }

  handleMouseOut(number) {
    if (document.getElementById('index-' + number)) {
      document.getElementById('index-' + number).className = 'hide point-pop-up';
    }
  }

  buttonClick(e) {
    var element;
    var id;
    if (e && e.target) {
      if (e.target.className) {
        element = e.target;
      } else {
        element = e.target.parentElement
      }
      this.resetSelect();
      element.className = element.className + ' selected';
      this.setState({
        type: element.id
      });
      // document.getElementById('map-container').style.display = 'none';
      this.props.history.push('/landingpage/' + element.id);
      // this.props.history.go();
    }
  }

  resetSelect() {
    document.getElementsByName('button-select').forEach(function (item) {
      if (item.className.indexOf('selected') > -1) {
        item.className = item.className.substring(0, item.className.indexOf('selected') - 1);
      }
    })
  }

  componentDidMount() {
    if (this.props.match.params.type) {
      this.resetSelect();
      document.getElementById(this.props.match.params.type).className += ' selected';
    }
  }


}

const styles = {
  mapContainer: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    zIndex: 0
  }
}

const mapStyles = {
  styleJson: 
    [
        {
                  "featureType": "water",
                  "elementType": "all",
                  "stylers": {
                            "color": "#336d93ff"
                  }
        },
        {
                  "featureType": "highway",
                  "elementType": "geometry.fill",
                  "stylers": {
                            "color": "#1c516fff"
                  }
        },
        {
                  "featureType": "arterial",
                  "elementType": "geometry.fill",
                  "stylers": {
                            "color": "#22566fff"
                  }
        },
        {
                  "featureType": "arterial",
                  "elementType": "geometry.stroke",
                  "stylers": {
                            "color": "#0b3d5100"
                  }
        },
        {
                  "featureType": "local",
                  "elementType": "geometry",
                  "stylers": {
                            "color": "#0e374aff"
                  }
        },
        {
                  "featureType": "land",
                  "elementType": "all",
                  "stylers": {
                            "color": "#11334aff"
                  }
        },
        {
                  "featureType": "railway",
                  "elementType": "geometry.fill",
                  "stylers": {
                            "color": "#030d11ff"
                  }
        },
        {
                  "featureType": "railway",
                  "elementType": "geometry.stroke",
                  "stylers": {
                            "color": "#08304b00"
                  }
        },
        {
                  "featureType": "subway",
                  "elementType": "geometry",
                  "stylers": {
                            "color": "#96bee300"
                  }
        },
        {
                  "featureType": "building",
                  "elementType": "geometry.fill",
                  "stylers": {
                            "color": "#000000"
                  }
        },
        {
                  "featureType": "all",
                  "elementType": "labels.text.fill",
                  "stylers": {
                            "color": "#857f7f"
                  }
        },
        {
                  "featureType": "all",
                  "stylers": {
                            "color": "#000000"
                  }
        },
        {
                  "featureType": "building",
                  "elementType": "geometry",
                  "stylers": {
                            "color": "#022338"
                  }
        },
        {
                  "featureType": "green",
                  "elementType": "geometry",
                  "stylers": {
                            "color": "#275e4bff"
                  }
        },
        {
                  "featureType": "boundary",
                  "elementType": "all",
                  "stylers": {
                            "color": "#1e1c1c"
                  }
        },
        {
                  "featureType": "manmade",
                  "elementType": "geometry",
                  "stylers": {
                            "color": "#022338"
                  }
        },
        {
                  "featureType": "poi",
                  "elementType": "all",
                  "stylers": {
                            "visibility": "off"
                  }
        },
        {
                  "featureType": "all",
                  "elementType": "labels.icon",
                  "stylers": {
                            "visibility": "off"
                  }
        },
        {
                  "featureType": "all",
                  "elementType": "labels.text.fill",
                  "stylers": {
                            "color": "#2da0c6",
                            "visibility": "on"
                  }
        },
        {
                  "featureType": "highway",
                  "elementType": "geometry.stroke",
                  "stylers": {
                            "color": "#2da0c600"
                  }
        },
        {
                  "featureType": "highway",
                  "elementType": "labels",
                  "stylers": {
                            "color": "#96bee3ff"
                  }
        },
        {
                  "featureType": "highway",
                  "elementType": "labels.text.stroke",
                  "stylers": {
                            "color": "#96bee300"
                  }
        },
        {
                  "featureType": "arterial",
                  "elementType": "labels.text.fill",
                  "stylers": {
                            "color": "#0b3d5100"
                  }
        },
        {
                  "featureType": "railway",
                  "elementType": "labels",
                  "stylers": {
                            "color": "#96bee300"
                  }
        },
        {
                  "featureType": "city",
                  "elementType": "labels.text.stroke",
                  "stylers": {
                            "color": "#96bee300"
                  }
        },
        {
                  "featureType": "city",
                  "elementType": "labels.text.fill",
                  "stylers": {
                            "color": "#ffffffff",
                            "hue": "#2a3c55"
                  }
        },
        {
                  "featureType": "town",
                  "elementType": "labels.text.fill",
                  "stylers": {
                            "color": "#9ba9b6ff"
                  }
        },
        {
                  "featureType": "town",
                  "elementType": "labels.text.stroke",
                  "stylers": {
                            "color": "#9ba9b600"
                  }
        },
        {
                  "featureType": "district",
                  "elementType": "labels.text.fill",
                  "stylers": {
                            "color": "#cfe2f3ff"
                  }
        },
        {
                  "featureType": "district",
                  "elementType": "labels.text.stroke",
                  "stylers": {
                            "color": "#cfe2f300"
                  }
        },
        {
                  "featureType": "railway",
                  "elementType": "labels.text.fill",
                  "stylers": {
                            "color": "#cfe2f300"
                  }
        },
        {
                  "featureType": "subway",
                  "elementType": "labels.text.stroke",
                  "stylers": {
                            "color": "#cfe2f300"
                  }
        },
        {
                  "featureType": "arterial",
                  "elementType": "labels.text.fill",
                  "stylers": {
                            "color": "#a1bcd4ff"
                  }
        },
        {
                  "featureType": "arterial",
                  "elementType": "labels.text.stroke",
                  "stylers": {
                            "color": "#d9ead300"
                  }
        },
        {
                  "featureType": "scenicspotslabel",
                  "elementType": "labels.text.fill",
                  "stylers": {
                            "color": "#fff2ccff"
                  }
        },
        {
                  "featureType": "town",
                  "elementType": "labels.text.fill",
                  "stylers": {
                            "color": "#98b6d1ff"
                  }
        },
        {
                  "featureType": "scenicspotslabel",
                  "elementType": "labels.text.stroke",
                  "stylers": {
                            "color": "#98b6d100"
                  }
        }
      ]
}

export default landingPage;
