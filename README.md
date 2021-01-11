# D3.js v5 & Belgium's covid-19 data

After [my first personnal project on D3.js(v5)](https://gitlab.com/youdev97/d3js_covid) which was only an index.html and a .js file,
to improve my skills in JS I decided to implement it in a ReactJS app

## LineChart

I built a LineChart class that is used 2 times to create a graph about the number of hospital's intakes in Belgium and an another one with the total number of patients for the last few months.

## Map

I also use map, got the [NaturalEarthData] subunits data, I extracted only the belgium data from the shapefile and converted it in GeoJson file.
GDAL & TopoJSON are tools needed to perform this.

```
brew install gdal
```

```
npm install -g topojson
```

Extracting

```
ogr2ogr \
  -f GeoJSON \
  -where "ADM0_A3 = 'BEL' " \
  belgium.json \
  ne_10m_admin_0_map_subunits.shp
```

### Tech

[D3.js] - JavaScript library for visualizing data with HTML, SVG, and CSS.
[openData] - openData pandemic belgium hospitalisations API
[NaturalEarthData] - World vector map data

[openData]: <https://data.opendatasoft.com/explore/dataset/covid-19-pandemic-belgium-hosp-province%40public/api/?sort=date>
[D3.js]: <https://d3js.org/>
[NaturalEarthData]: <https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-0-details/>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
