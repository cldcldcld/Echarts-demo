import React, { Component } from 'react';
import './landingPage.css';
import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmap';

class landingPage extends Component {

  constructor() {
    super();
  }  

  render() {
    return (
        <Map style={styles.mapContainer} mapStyle={mapStyles} center={{lng: 120.193601, lat: 30.283677}} zoom="13">
            {/*<Marker position={{lng: 116.402544, lat: 39.928216}} />*/}
            {/*<NavigationControl />*/}
            {/*<InfoWindow position={{lng: 116.402544, lat: 39.928216}} text="内容" title="标题"/>*/}
        </Map>
    );
  }

  componentDidMount() {

  }


}

const styles = {
  mapContainer: {
    height: '100%',
    width: '100%'
  }
}

const mapStyles = {
  styleJson: 
    [
        {
            "featureType": "all",
            "elementType": "all",
            "stylers": {
                "lightness": 41,
                "saturation": -70
            }
        }
    ]
}

export default landingPage;
