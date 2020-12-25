import React, {
  Component
} from 'react'
import * as d3 from 'd3'

class LineChart extends Component {
  componentDidMount () {
    this.vis = {
      parentElement: this.props.parentElement,
      variable: this.props.variable,
      title: this.props.title,
    }
    this.drawChart()
  }

  drawChart () {
    const vis = this.vis
    vis.MARGIN = { LEFT: 100, RIGHT: 100, TOP: 50, BOTTOM: 100 }
    vis.WIDTH = 600 - vis.MARGIN.LEFT - vis.MARGIN.RIGHT
    vis.HEIGHT = 500 - vis.MARGIN.TOP - vis.MARGIN.BOTTOM
    vis.svg = d3.select(vis.parentElement).append('svg')
      .attr('viewBox', `0 0 ${vis.WIDTH + vis.MARGIN.LEFT + vis.MARGIN.RIGHT} ${vis.HEIGHT + vis.MARGIN.TOP + vis.MARGIN.BOTTOM}`)

    vis.g = vis.svg.append('g')
      .attr('transform', `translate(${vis.MARGIN.LEFT}, ${vis.MARGIN.TOP})`)

    // for tooltip
    vis.bisectDate = d3.bisector(d => {
      return d.key
    }).left

    vis.g.append('text')
      .attr('x', vis.WIDTH / 2)
      .attr('y', -15)
      .text('Brussels hospitals')

    // add the line for the first time
    vis.g.append('path')
      .attr('class', 'line')
      .attr('fill', 'none')
      .attr('stroke', 'grey')
      .attr('stroke-width', '3px')

    // axis labels
    vis.xLabel = vis.g.append('text')
      .attr('class', 'x axisLabel')
      .attr('y', vis.HEIGHT + 50)
      .attr('x', vis.WIDTH / 2)
      .attr('font-size', '20px')
      .attr('text-anchor', 'middle')
      .text('Time')
    vis.yLabel = vis.g.append('text')
      .attr('class', 'y axisLabel')
      .attr('transform', 'rotate(-90)')
      .attr('y', -60)
      .attr('x', -170)
      .attr('font-size', '25px')
      .attr('text-anchor', 'middle')
      .text(vis.title)

    // scales
    vis.x = d3.scaleTime().range([0, vis.WIDTH])
    vis.y = d3.scaleLinear().range([vis.HEIGHT, 0])

    // axis generators
    vis.xAxisCall = d3.axisBottom()
      .ticks(5)
    vis.yAxisCall = d3.axisLeft()
      .ticks(6)

    // axis groups
    vis.xAxis = vis.g.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${vis.HEIGHT})`)
    vis.yAxis = vis.g.append('g')
      .attr('class', 'y axis')

    this.wrangleData('Brussels')
  }

  wrangleData(city) {
    const vis = this.vis
    console.log(this.props.data)
    // filter by region
    vis.filteredData = [...this.props.data[city]]
    // if region have subunits sum the data for the same date
    vis.filteredData = d3.nest()
      .key(function (d) {
        return Date.parse(d.date)
      })
      .rollup(function (v) {
        return d3.sum(v, function (d) {
          return d[vis.variable]
        });
      })
      .entries(vis.filteredData)
    vis.g.select('text').text(city) //update title
    vis.updateVis()
  }

  render () {
    return <div id={'#' + 'this.props.test'} />
  }
}

export default LineChart
