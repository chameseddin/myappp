import React from "react";
import GoogleMapReact from "google-map-react";
import "./App.css";

export default function App() {
return (
<div style={{height:"100vh", width:"100%"}}>
<GoogleMapReact
bootstrapURLKeys={{Key:process.env.REACT_APP_GOOGLE_KEY}}
defaultCenter={{lati:35.856958,lngt:10.596090}}
defaultZoom={15}
>
</GoogleMapReact>
</div>

);
}