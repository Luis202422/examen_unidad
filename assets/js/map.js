var map = L.map('map', {
    center: [-17.645875, -71.345271],
    zoom: 20,
    minZoom: 10,
    maxZoom: 30,
    maxBounds: [[-17.8681,-71.5245], [-15.9593,-69.9777]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
var googleHybrid = L.tileLayer('https://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: 'Google Hybrid'
});

var googleSat = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: 'Google Satellite'
});

// Definir control de capas
var baseLayers = {
    "OpenStreetMap": basemapOSM,
    "Google Hybrid": googleHybrid,
    "Google Satellite": googleSat
};

// Añadir capa predeterminada al mapa
basemapOSM.addTo(map);

// Añadir control de capas al mapa
L.control.layers(baseLayers).addTo(map);