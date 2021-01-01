import './App.css'
import React, {
  Component
} from 'react'
import LineChart from './components/LineChart.jsx'
import MapChart from './components/MapChart.jsx'
import * as d3 from 'd3'
import logo from './img/virus.png'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
    this.geoData = null
  }

  parseTime = d3.timeParse('%Y-%m-%d')
  formatTime = d3.timeFormat('%d/%m/%Y')

  componentDidMount() {
    // load data
    // time parsers/formatters
    const url = 'https://data.opendatasoft.com/api/records/1.0/search/?dataset=covid-19-pandemic-belgium-hosp-province%40public&rows=1200&sort=date&facet=date&facet=province&facet=region'
    // const url = 'data/data.json' in case of broken url test with this
    const formattedData = {}
    const parent = this
    d3.json(url).then(function (data) {
      // wrapping data into an array
      data = Object.values(data)

      // sort the array by Region becoming the key
      const dataByRegion = data[2].reduce(function (r, a) {
        r[a.fields.region] = r[a.fields.region] || []
        r[a.fields.region].push(a)
        return r
      }, Object.create(null))

      // Filter, format and sort fields by date ascending
      Object.keys(dataByRegion).forEach(region => {
        formattedData[region] = dataByRegion[region]
          .filter(d => {
            const validData = (d.fields.new_in && d.fields.date && d.fields.total_in)
            return validData
          }).map(d => {
            d.fields.new_in = Number(d.fields.new_in)
            d.fields.total_in = Number(d.fields.total_in)
            d.fields.date = parent.parseTime(d.fields.date)
            return d.fields
          }).sort(function (a, b) {
            return a.date - b.date
          })
      })
      d3.json('./data/belgium.json').then(function (values) {
        parent.geoData = values
        console.log(formattedData)
        parent.setState({
          data: formattedData
        })
      }).catch(function (error) {
        console.error('error getting map json', error)
      })
    })
  }

  render() {
    let lineChart = null
    let lineChart2 = null
    let mapChart = null
    if (this.state.data) {
      lineChart = <LineChart parentElement='#chart-area' variable='new_in' title='covid-19 new entries' data={this.state.data} />
      lineChart2 = <LineChart parentElement='#chart-area2' variable='total_in' title='covid-19 patients' data={this.state.data} />
    }
    if (this.state.data && this.geoData) {
      mapChart = <MapChart parentElement='#map' geoData={this.geoData} data={this.state.data} formatTime={this.formatTime} />
    }
    return (
      <div className='App'>
        <nav className='navbar navbar-light bg-light'>
          <div className='container'>
            <a className='navbar-brand'>
              <img id='logo' src={logo} height='120' />
            </a>
          </div>
        </nav>

        <div className='container'>
          <div className='col-sm-12 col-md-12 col-xl-12'>
            <div className='buttons-container'>
              <button type='button' data-index='Brussels' name='button' className='btn btn-secondary'>Brussels</button>
              <button type='button' data-index='Flanders' name='button' className='btn btn-secondary'>Flanders</button>
              <button type='button' data-index='Wallonia' name='button' className='btn btn-secondary'>Wallonia</button>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12 col-md-12 col-xl-6'>
              <div id='chart-area'>
                {lineChart}
              </div>

            </div>
            <div className='col-sm-12 col-md-12 col-xl-6'>
              <div id='chart-area2'>
                {lineChart2}
              </div>
            </div>
            <div className='col-sm-12 col-md-12 col-xl-12'>
              <div id='map'>
                {mapChart}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
