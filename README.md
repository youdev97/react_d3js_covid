# DataViz Belgium's Hospitals situation Covid-19

DataViz with D3.js v5 LineCharts & MapChart that displays last updated data about Belgium's hospitals situation during COVID-19.

Based on [my first personnal project on D3.js(v5)](https://gitlab.com/youdev97/d3js_covid) and to improve my skills in JS I decided to combine it with ReactJS

## LineChart

I built a LineChart class that is used 2 times to create a graph about the number of hospital's intakes in Belgium and an another one with the total number of patients for the last few months.

## Map

I also use MapChart that represents Belgium and on mouse move or click on one region you get the situations of Hospitals in that region.

### Tech

[D3.js] - JavaScript library for visualizing data with HTML, SVG, and CSS.

[openData] - openData pandemic belgium hospitalisations API

[NaturalEarthData] - World vector map data

[openData]: <https://data.opendatasoft.com/explore/dataset/covid-19-pandemic-belgium-hosp-province%40public/api/?sort=date>
[D3.js]: <https://d3js.org/>
[NaturalEarthData]: <https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-0-details/>

## How to run

In the project directory, you can run:

### `npm install`

to install all required packages and then

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
