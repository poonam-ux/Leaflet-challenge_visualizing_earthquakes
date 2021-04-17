# leaflet-challenge_visualizing_earthquakes

### Background:

United States Geological Survey (USGS) is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. They want to build a new set of tools that will allow them to visualize their earthquake data.

## Level 1: Basic Visualization

1. Get your data set

Visit the USGS GeoJSON Feed page and pick a data set to visualize. You will be given a JSON representation of that data. You will be using the URL of this JSON to pull in the data for our visualization.

2. Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.

    * Your data markers should reflect the magnitude of the earthquake by their size and depth of the earthquake by color.
    * Earthquakes with higher magnitudes should appear larger and earthquakes with greater depth should appear darker in color.
    * Include popups that provide additional information about the earthquake when a marker is clicked.
    * Create a legend that will provide context for your map data.

### Basic Map: 

![](https://github.com/poonam-ux/Leaflet-challenge_visualizing_earthquakes/blob/main/Images/step-1_basic_map_sm.png)

### Earthquake markers: 

![](https://github.com/poonam-ux/Leaflet-challenge_visualizing_earthquakes/blob/main/Images/step-1_earthquakes_markers_sm.png)

### Legends:

![](https://github.com/poonam-ux/Leaflet-challenge_visualizing_earthquakes/blob/main/Images/step-1_legends_sm.png)

## Level 2: More Data

The USGS wants you to plot a second data set on your map to illustrate the relationship between tectonic plates and seismic activity. You will need to pull in a second data set and visualize it alongside your original set of data. Data on tectonic plates can be found at https://github.com/fraxen/tectonicplates.

### Satellite map:

![](https://github.com/poonam-ux/Leaflet-challenge_visualizing_earthquakes/blob/main/Images/step-2_satellite_layer_sm.png)

* Plot a second data set on our map.

### Earthquake markers:

![](https://github.com/poonam-ux/Leaflet-challenge_visualizing_earthquakes/blob/main/Images/step-2_earthquakes_markers%20_sm.png)

* Add a number of base maps to choose from as well as separate out our two different data sets into overlays that can be turned on and off independently.

* Add layer controls to our map.
