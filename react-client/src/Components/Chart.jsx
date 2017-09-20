import React, { Component } from 'react';
import _ from 'lodash';
import Plotly from '../Plugins/Plotly';

class Chart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var data = [
            {
                x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
                y: [1, 3, 6],
                type: 'scatter'
            }
        ];

        const { chartItem } = this.refs;
        var layout = {
            showlegend: false,
            xaxis: {
                autorange: true,
                showgrid: false,
                zeroline: false,
                showline: false,
                autotick: true,
                ticks: '',
                showticklabels: false
            },
            yaxis: {
                autorange: true,
                showgrid: false,
                zeroline: false,
                showline: false,
                autotick: true,
                ticks: '',
                showticklabels: false
            }
        };
        Plotly.newPlot(chartItem, data, layout);

        var debouncedResize = _.debounce(() => {
            Plotly.Plots.resize(chartItem);
        }, 200);
        window.addEventListener('resize', debouncedResize);
    }

    render() {
        const { className = 'Chart' } = this.props;

        return (
            <div
                className={className}
                ref='chartItem'
            />
        );
    }
}

export default Chart;