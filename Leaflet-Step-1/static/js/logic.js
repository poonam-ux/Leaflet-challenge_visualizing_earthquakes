// Creating map object
var myMap = L.map("map", {
	center: [40.73, -74.0059],
	zoom: 4
});

//Gray Mapbox background
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
	attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
	maxZoom: 18,
	id: "mapbox.streets",
	accessToken: API_KEY
}).addTo(myMap);

// Load in geojson data
var geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
