import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
// import './index.css';
import App from './App';
// import baseRadarChart from './airComponent/radar/baseRadarChart';
// import radarChart from './airComponent/radarImage/radarChart';
// import histogramChart from './airComponent/histogram/histogramChart';
// import confidenceBandChart from './airComponent/confidenceBand/confidenceBandChart';
// import rainfallChart from './airComponent/rainfall/rainfallChart';
// import heatMapChart from './airComponent/heatMap/heatMapChart';
// import baseLineChart from './airComponent/baseLine/baseLineChart';
// import stackLineChart from './airComponent/stackLine/stackLineChart';
// import standardHistogramChart from './airComponent/standardHistogram/standardHistogramChart';
// import gaugeChart from './airComponent/gauge/gaugeChart';
// import scatterChart from './airComponent/scatter/scatterChart';
import dashboardAir from './dashboardAir';
import dashboardWater from './dashboardWater';
import dashboardSoil from './dashboardSoil';
// import AQIRadarChart from './airComponent/AQIRadar/AQIRadarChart';
// import SmoothLineChart from './airComponent/smoothLine/smoothLineChart';
import LandingPage from './landingPage/landingPage';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import warningDashboardAir from './warningDashboardAir';
import airAnalysis from './airComponent/airAnalysis/airAnalysis';

// ReactDOM.render(<App />, document.getElementById('root'));

// setTimeout(function() {
//   ReactDOM.render((
//     <BrowserRouter>
//       <MuiThemeProvider>
//       	<div style={{height: '100%'}}>
//           <Route path="/" exact component={LandingPage}/>
//           <Route path="/landingpage/:type" component={LandingPage}/>
//       		<Route path="/dashboardAir" component={dashboardAir}/>
//           <Route path="/dashboardWater" component={dashboardWater}/>
//           <Route path="/dashboardSoil" component={dashboardSoil}/>
//           <Route path="/warningDashboardAir" component={warningDashboardAir}/>
//          	<Route path="/map" component={App}/>
//     {/*     	<Route path="/baseRadarChart" component={baseRadarChart}/>
//          	<Route path="/radarChart" component={radarChart}/>
//          	<Route path="/histogramChart" component={histogramChart}/>
//          	<Route path="/confidenceBandChart" component={confidenceBandChart}/>
//          	<Route path="/rainfallChart" component={rainfallChart}/>
//          	<Route path="/heatMapChart" component={heatMapChart}/>
//          	<Route path="/baseLineChart" component={baseLineChart}/>
//          	<Route path="/stackLineChart" component={stackLineChart}/>
//          	<Route path="/standardHistogramChart" component={standardHistogramChart}/>
//          	<Route path="/gaugeChart" component={gaugeChart}/>
//           <Route path="/scatterChart" component={scatterChart}/>
//           <Route path="/AQIRadarChart" component={AQIRadarChart}/>
//           <Route path="/SmoothLineChart" component={SmoothLineChart}/>*/}
//         </div>
//       </MuiThemeProvider>
//     </BrowserRouter>
//   ), document.getElementById('root'))}, 100);
  ReactDOM.render((
    <BrowserRouter>
      <MuiThemeProvider>
        <div style={{height: '100%'}}>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/landingpage/:type" component={LandingPage}/>
          <Route path="/dashboardAir" component={dashboardAir}/>
          <Route path="/dashboardWater" component={dashboardWater}/>
          <Route path="/dashboardSoil" component={dashboardSoil}/>
          <Route path="/warningDashboardAir" component={warningDashboardAir}/>
          <Route path="/airAnalysis" component={airAnalysis}/>
          <Route path="/map" component={App}/>
    {/*       <Route path="/baseRadarChart" component={baseRadarChart}/>
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
          <Route path="/SmoothLineChart" component={SmoothLineChart}/>*/}
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  ), document.getElementById('root'))

registerServiceWorker();
