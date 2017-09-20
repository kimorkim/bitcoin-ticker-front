import React, { Component } from 'react';
import logo from './logo.svg';
import Ticker from './Components/Ticker';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Ticker />
            </div> 
        );
    }
}

export default App;
