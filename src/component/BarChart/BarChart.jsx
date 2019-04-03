import React from 'react'
import * as d3 from 'd3'


class BarChart extends React.Component {

    // mount the 'drawChart()' method to visualize the data
    componentDidMount() {
        this.drawChart()
    }

    // bar chart create method
    drawChart = () => {
        // create the data to visualize
        const data = [12, 5, 6, 6, 9, 10]
        // create svg element
        const svg = d3.select('body')
            .append('svg')
            .attr('width', 700)
            .attr('height', 300)
            .style('margin-left', 100)

        svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * 70)
        .attr('y', (d, i) => 200 - 10 * d)
        .attr('width', 65)
        .attr('height', (d, i) => d * 10)
        .attr('fill', 'green')
    }

    render() {
        return (
            <div id={"#" + this.props.id}></div>
        )
    }
}

export default BarChart