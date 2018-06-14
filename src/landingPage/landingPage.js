import React, { Component } from 'react';
import './landingPage.css';
import {Map, Circle , NavigationControl, InfoWindow, MarkerList} from 'react-bmap';
import StationPopup from './popup/stationPopup'

class landingPage extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.pointLocation = [
      {
          text: "",
          location: "120.193601,30.283677"
      },
      {
          text: "",
          location: "120.293601,30.283677"
      }
    ]
  }  

  render() {

    const pointPopUpComponent = this.pointLocation.map((item, index) =>
        <div key={index} className='point-pop-up' id={'index-' + index}>
            <StationPopup></StationPopup>
        </div>
    );

    return (
        <div className='map-container'>
          <Map style={styles.mapContainer} mapStyle={mapStyles} center={{lng: 120.193601, lat: 30.283677}} zoom="12">
                <MarkerList 
                  data={this.pointLocation} 
                  fillStyle="#55DDEE" 
                  animation={true} 
                  isShowShadow={false} 
                  multiple={false} 
                  autoViewport={false}
                  onClick={this.handleClick}
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}
                />
          </Map>
          {pointPopUpComponent}
        </div>
    );
  }

  handleClick(number) {
    this.props.history.push('/dashboard');
  }

  handleMouseOver(number) {
    var styles;
    if (document.getElementById('index-' + number)) {
      styles = document.getElementById('index-' + number).style;
      styles.top = event.target.offsetTop - 20 + "px";
      styles.left = event.target.offsetLeft + 20 + "px";
    }
  }

  handleMouseOut(number) {
    console.log(number);
  }

  componentDidMount() {

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
