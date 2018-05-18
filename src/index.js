import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import baseRadarChart from './radar/baseRadarChart';
import radarChart from './radarImage/radarChart';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter } from 'react-router-dom'

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
  <BrowserRouter>
  	<div style={{height: '100%'}}>
     	<Route path="/" exact component={App}/>
     	<Route path="/baseRadarChart" component={baseRadarChart}/>
     	<Route path="/radarChart" component={radarChart}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();
