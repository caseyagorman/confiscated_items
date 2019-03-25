import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import key from "./config";

const mapStyles = {
  width: 220,
  height: 150
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.lng
        }}
      >
        <Marker lat={this.props.lat} lng={this.props.lng} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: key
})(MapContainer);
