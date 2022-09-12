// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid").setView([40.7, -94.5], 4);

//  Add a marker to the map for Los Angeles, California.
let marker = L.circleMarker([34.0522, -118.2437]).addTo(map);

// Reference for future styling: https://docs.mapbox.com/api/maps/styles/
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
  }
);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Add GeoJSON data.
let sanFranAirport = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        id: "3469",
        name: "San Francisco International Airport",
        city: "San Francisco",
        country: "United States",
        faa: "SFO",
        icao: "KSFO",
        alt: "13",
        "tz-offset": "-8",
        dst: "A",
        tz: "America/Los_Angeles",
      },
      geometry: {
        type: "Point",
        coordinates: [-122.375, 37.61899948120117],
      },
    },
  ],
};


// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport,{
//   pointToLayer:function(feature,latlng){
//   return L.circleMarker(latlng)
//   .bindPopup("<h2>" + feature.properties.city + "</h2>");
//   }
// }).addTo(map);

// OnEachFeature:
L.geoJSON(sanFranAirport, {
  onEachFeature: function(feature, layer) {
    layer.bindPopup("<h4>" + feature.properties.city + "</h4>" + "<hr>" + "<h5>Faa Code:</h5>" + feature.properties.faa);
   }
}).addTo(map);
