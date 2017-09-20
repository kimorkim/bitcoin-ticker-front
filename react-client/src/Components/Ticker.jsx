import React, { Component } from 'react';
import Chart from './Chart';
import axios from 'axios';
import Plotly from 'plotly.js/lib/core';

Plotly.register([
    require('plotly.js/lib/scatter'),
]);

class Ticker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ticker: {},
        }
    }

    componentDidMount() {
        this.getTicker();
        setInterval(()=> {
            this.getTicker();
        }, 5000);
    }

    getTicker() {
        axios.get('https://www.usbsync.net/bitcoin/api/ticker').then(({data})=> {
            this.setState({
                ticker: data,
            })
        }).catch((err)=> {
            console.error(err);
        });
    }

    render() {
        const { ticker = {} } = this.state;
        const { last = 0, changePercent } = ticker;
        const arrowText = changePercent > 0 ? '▲' : '▼';
        return (
            <div>
                <div
                    className='tickerMessage'
                >
                    <h1
                        className='title'
                    >
                        1BTC 실시간 시세
                    </h1>
                    <div
                        className='content'
                    >
                        <div
                            className='lastPrice'
                        >
                            ￦ { new Intl.NumberFormat().format(last) }
                        </div>
                        <div
                            className='changePercent'
                        >
                            {arrowText} { changePercent }%
                        </div>
                    </div>
                </div>
                <Chart 
                    className='backgroundChart'
                />
            </div>
        );
    }
}

export default Ticker;