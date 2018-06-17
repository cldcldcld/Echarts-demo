import React, { Component } from 'react';
import './landingPage.css';
import {Map, MarkerList} from 'react-bmap';
import StationPopup from './popup/stationPopup'

class landingPage extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.buttonClick = this.buttonClick.bind(this);

    this.stationInfo = {
      'Air': [
        {
          stationNumber: '01',
          stationName: 'Binjiang Air Station',
          stationLatitude: 'Latitude: 30.283677 °N',
          stationLongitude: 'Longitude: 120.193601 °E',
          stationspecialty: 'Elevation: 9 m',
          stationTemperature: '31'
        }
      ],
      'Water': [
        {
          stationNumber: '01',
          stationName: 'Fuchun River Reservoir',
          stationLatitude: 'Latitude: 30.233677 °N',
          stationLongitude: 'Longitude: 120.163601 °E',
          stationspecialty: 'Water Level: 22.42 m',
          stationTemperature: '31'
        }
      ],
      'Soil': [
        {
          stationNumber: '01',
          stationName: 'Fuchun River Reservoir',
          stationLatitude: 'Latitude: 30.253677 °N',
          stationLongitude: 'Longitude: 120.133601 °E',
          stationspecialty: 'Water Level: 22.42 m',
          stationTemperature: '31'
        }
      ]     
    }

    this.stationLocation = { 
      'Air': [
        {
          text: '',
          location: '120.193601,30.283677'
        }
      ],
      'Water': [
        {
          text: '',
          location: '120.163601,30.233677'
        }
      ],
      'Soil': [
        {
          text: '',
          location: '120.133601,30.253677'
        }
      ]
    }

    this.colorObj = {
      'Air': '#55DDEE',
      'Water': '#9885FE',
      'Soil': '#FFA229'
    }

    this.state = {
        type: 'Air'
    }

  }  

  render() {

    const stationInfo = this.stationInfo[this.state.type];
    const pointLocation = this.stationLocation[this.state.type];
    const color = this.colorObj[this.state.type];

    const pointPopUpComponent = stationInfo.map((item, index) =>
        <div key={index} className='hide point-pop-up' id={'index-' + index}>
            <StationPopup stationInfo={item} index={index}></StationPopup>
        </div>
    );

    const markList = <MarkerList 
                        data={pointLocation} 
                        fillStyle={color}
                        animation={true} 
                        isShowShadow={false} 
                        multiple={false} 
                        autoViewport={false}
                        onClick={this.handleClick}
                        onMouseOver={this.handleMouseOver}
                        onMouseOut={this.handleMouseOut}
                      />
    return (
        <div className='map-container'>
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
          </div>
          <Map style={styles.mapContainer} mapStyle={mapStyles} center={{lng: 120.193601, lat: 30.283677}} zoom='12'>
            {markList}
          </Map>
          {pointPopUpComponent}
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
      styles.top = event.target.offsetTop - 300 + document.body.offsetHeight * 0.03 + 'px';
      styles.left = event.target.offsetLeft + 50 + document.body.offsetWidth * 0.03 + 'px';
      document.getElementById('index-' + number).className = 'point-pop-up';
    }
  }

  handleMouseOut(number) {
    if (document.getElementById('index-' + number)) {
      document.getElementById('index-' + number).className = 'hide point-pop-up';
    }
  }

  buttonClick(e) {
    var element;
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
    }
  }

  resetSelect() {
    document.getElementsByName('button-select').forEach(function (item) {
      if (item.className.indexOf('selected') > -1) {
        item.className = item.className.substring(0, item.className.indexOf('selected') - 1);
      }
    })
  }

  // componentDidMount() {

  // }


}

const styles = {
  mapContainer: {
    height: '90%',
    width: '94%',
    padding: '3% 3% 3% 3%',
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
