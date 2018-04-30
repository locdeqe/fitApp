import React from 'react'
import ReactDOM from 'react-dom'
import * as d3 from 'd3'
import './style.css'

class BodyWeightSnippet extends React.Component{
    bodyWeight = this.extractData(this.props.results)

    extractData (data) {
        const parseTime = d3.timeParse("%m/%d/%Y")
        let results = []

        for (let key in data) {
            data[key].forEach(element => {
                let obj = {
                    date: parseTime(key),
                    result: element
                }
                results.push(obj)
            });
        }

        return results
    }

    renderChart() {
        const node = this.node
        const data = this.bodyWeight
        const size = ReactDOM.findDOMNode(node).getBoundingClientRect()
        const minValue = d3.min(data, function(d) { return d.result; })
        const maxValue = d3.max(data, function(d) { return d.result; })
        const x = d3.scaleLinear().domain([0, data.length]).range([0, size.width])
        const y = d3.scaleTime().domain([minValue, maxValue]).rangeRound([size.height, 0])   
        const valueLine = d3.line()
                            .x(function(d, count) {return x(count); })
                            .y(function(d) { return y(d.result); })

        
        d3.select(node).append('g')
                        .append('path')
                        .datum(data)
                        .attr('class', 'plotLine')
                        .attr("d", valueLine)

        d3.select("svg").append("g")
            .attr("transform", "translate(0," + size.height + ")")
            .call(d3.axisBottom(x));

        d3.select("svg").append("g")
            .call(d3.axisLeft(y));
    }

    componentDidMount() {
        this.renderChart()
    }

    render() {
        return(
            <div className="card">
                <h2 className="card-title">{this.props.title}</h2>
                <svg ref={node => this.node = node} width={'100%'} height={'100%'}/>
            </div>
        )
    }
}

export default BodyWeightSnippet