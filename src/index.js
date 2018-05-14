import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import baseRadarChart from './radar/baseRadarChart';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter } from 'react-router-dom'

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
  <BrowserRouter>
  	<div>
    	<Route path="/" component={App}/>
    </div>
    <div>
    	<Route path="/baseRadarChart" component={baseRadarChart}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();
