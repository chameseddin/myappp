import L from 'leaflet';


const mapPin = new L.Icon({
    iconUrl: require('./img/pin.png'),
    iconRetinaUrl: require('./img/pin.png'),
    iconSize: new L.Point(50, 50),
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
});

export { mapPin };