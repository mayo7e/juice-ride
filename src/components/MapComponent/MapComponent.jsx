import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import { Popup } from 'react-leaflet/Popup'
// import { Marker } from 'react-leaflet/Marker'
// import { useMap } from 'react-leaflet/hooks'
// // 
import { MapWrapper } from './MapComponent.styles';



const MapComponent = ({ isChatOpen }) => {
  return (


    <MapWrapper isChatOpen={isChatOpen}>
      {/* <MapContainer center={[37.7749, -122.4194]} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[37.7749, -122.4194]}>
          <Popup>San Francisco</Popup>
        </Marker>
      </MapContainer> */}
    </MapWrapper>
  );
};

export default MapComponent;
