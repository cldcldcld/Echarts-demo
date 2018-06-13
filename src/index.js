import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import baseRadarChart from './radar/baseRadarChart';
import radarChart from './radarImage/radarChart';
import histogramChart from './histogram/histogramChart';
import confidenceBandChart from './confidenceBand/confidenceBandChart';
import rainfallChart from './rainfall/rainfallChart';
import heatMapChart from './heatMap/heatMapChart';
import baseLineChart from './baseLine/baseLineChart';
import stackLineChart from './stackLine/stackLineChart';
import standardHistogramChart from './standardHistogram/standardHistogramChart';
import gaugeChart from './gauge/gaugeChart';
import scatterChart from './scatter/scatterChart';
import dashboard from './dashboard';
import AQIRadarChart from './AQIRadar/AQIRadarChart';
import SmoothLineChart from './smoothLine/smoothLineChart';
import LandingPage from './landingPage/landingPage';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter } from 'react-router-dom'

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
  <BrowserRouter>
  	<div style={{height: '100%'}}>
  		<Route path="/" exact component={dashboard}/>
     	<Route path="/map" component={App}/>
     	<Route path="/baseRadarChart" component={baseRadarChart}/>
     	<Route path="/radarChart" component={radarChart}/>
     	<Route path="/histogramChart" component={histogramChart}/>
     	<Route path="/confidenceBandChart" component={confidenceBandChart}/>
     	<Route path="/rainfallChart" component={rainfallChart}/>
     	<Route path="/heatMapChart" component={heatMapChart}/>
     	<Route path="/baseLineChart" component={baseLineChart}/>
     	<Route path="/stackLineChart" component={stackLineChart}/>
     	<Route path="/standardHistogramChart" component={standardHistogramChart}/>
     	<Route path="/gaugeChart" component={gaugeChart}/>
      <Route path="/scatterChart" component={scatterChart}/>
      <Route path="/AQIRadarChart" component={AQIRadarChart}/>
      <Route path="/SmoothLineChart" component={SmoothLineChart}/>
      <Route path="/landingPage" component={LandingPage}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();
