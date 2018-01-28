import React, {Component} from 'react'
import {Marker, Map, GoogleApiWrapper, InfoWindow} from 'google-maps-react';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.state = {
      place: null,
      position: null,
      markers: [],
      showingInfoWindow: false,
      activeMarker: null,
      selectedPlace: {
        name: null,
        bars: []
      }
    }
  };

  searchStyle = {
    position: 'absolute',
    top: '1em',
    right: '1em',
    width: '20em'
  };

  handleChange = (e) => {
    const {google} = this.props;
    let autocomplete = new google.maps.places.Autocomplete(e.target);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        this.setState({
          place: place,
          position: place.geometry.location
        })
      }
    })
  };

  handleMarkerClick = (props, marker ) => {
    console.log(props)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  handleMapClick = (mapProps, map, clickEvent) => {
    const { google } = this.props;
    let service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: {
        lat: clickEvent.latLng.lat(),
        lng: clickEvent.latLng.lng()
      },
      radius: 200,
      type: ['bar']
    }, res => this.setState({
      showingInfoWindow: false,
      markers: [...this.state.markers, {
        bars: res,
        pos: {
          lat: clickEvent.latLng.lat(),
          lng: clickEvent.latLng.lng()
        }
      }]
    }));
  };


  render(){
    return (
      <Map onClick={this.handleMapClick} google={this.props.google} center={this.state.position} zoom={14}>
        <div className="pt-input-group" style={this.searchStyle}>
          <span className="pt-icon pt-icon-search"/>
          <input onChange={this.handleChange} className="pt-input" type="search" placeholder="Search" dir="auto"
                 ref="autocomplete"/>
        </div>
        { this.state.markers.map( m => {
          return <Marker key={m.pos.lat + Math.random() }
                         position={m.pos}
                         onClick={this.handleMarkerClick}
                         bars={m.bars}
          />
        })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.bars.length}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({})(MapContainer)