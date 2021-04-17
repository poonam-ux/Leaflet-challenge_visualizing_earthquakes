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

//Grab data with d3
d3.json(geoData, function (data) {
    // This function returns the style data for each of the earthquakes we plot on
	// the map. We pass the magnitude of the earthquake into two separate functions
	// to calculate the color and radius.
    function styleInfo(feature) {
        return {
            opacity: 1,
            fillOpacity: 1,
            fillColor: getColor(feature.properties.mag),
            color: "#000000",
            radius: getRadius(feature.properties.mag),
            stroke: true,
            weight: 0.5
        };
    }
    
    // This function determines the color of the marker based on the magnitude of the earthquake.
	function getColor(magnitude) {
		if (magnitude > 5) {
			return "#ea2c2c";
		}
		if (magnitude > 4) {
			return "#ea822c";
		}
		if (magnitude > 3) {
			return "#ee9c00";
		}
		if (magnitude > 2) {
			return "#eecc00";
		}
		if (magnitude > 1) {
			return "#d4ee00";
		}
		return "#daf7a6";
	}

    // This function determines the radius of the earthquake marker based on its magnitude.
	// Earthquakes with a magnitude of 0 were being plotted with the wrong radius.
	function getRadius(magnitude) {
        if (magnitude === 0) {
          return 1;
        }
    
        return magnitude * 4;
    }
    
    L.geoJson(data, {
        pointToLayer: function (feature, latlong) {
            return L.circleMarker(latlong);
        },
        style: styleInfo,
        
        // Binding a pop-up to each layer
        onEachFeature: function (feature, layer) {
            layer.bindPopup("Earthquake Magnitude: " + feature.properties.mag + "<br>Earthquake Location:<br>" + feature.properties.place);
        }
    }).addTo(myMap);
})