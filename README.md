# Mapping_Earthquakes

## Project Overview:

In this project a `Application Programming Interface (API)` and `Leaflet` is used to populate a geographical map with `GeoJSON` earthquake data from a URL. Each earthquake will be visually represented by a circle and color, where a higher magnitude will have a larger diameter and will be darker in color. In addition, each earthquake will have a popup marker that, when clicked, will show the magnitude of the earthquake and where it occurred.

## Approach: 

We will use the `JavaScript` and the `D3.js` library to retrieve the coordinates and magnitudes of the earthquakes from the GeoJSON data. Using the `Leaflet` library we plot the data on a Mapbox map through an API request and create interactivity for the earthquake data. The GeoJSON earthquake data is sourced from the `USGS` website where we retrieve geographical coordinates and the magnitudes of earthquakes for the last seven days and then add the data to our map.

### Multiple map layer options were added as well as a map legend:

<br>

<p align=left>
<img src=Images/legend.png height=200> <img src=Images/map_filter.png height=200>

<br>

[Link to Deployed Map!](https://brotherscodes.github.io/Mapping_Earthquakes/)

<b/>

# Final Result:

<p align=center>
<img src=Images/final_result.png>

## Resources:

- Software:
    - `Javascript`
    - `HTML5`
    - `CSS`
    - `Google Chrome`, `Div Tools`
    - `VS Code`
    - `JSON`
    - `Leaflet`

<br>

- Code for reference:
    - `index.html`
    - `style.css`
    - `challenge_logic_D2.js`

<br>