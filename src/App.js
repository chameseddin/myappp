import React from "react";
// import GoogleMapReact from "google-map-react";
import "./App.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { mapPin } from "./MapMarker";

export default function App() {
    return (
        <div style={{ height: "100vh", width: "100%" }}>
            {/* <GoogleMapReact
                bootstrapURLKeys={{ Key: process.env.REACT_APP_GOOGLE_KEY }}
                defaultCenter={{ lati: 35.856958, lngt: 10.596090 }}
                defaultZoom={15}
            >
            </GoogleMapReact> */}

            
            <MapContainer style={{ height: '100%', width: '100%' }} center={[35.820030, 10.591824]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[35.820030, 10.591824]} icon={mapPin}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>

        </div>
    );
}