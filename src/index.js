import React from 'react'
import ReactDOM from 'react-dom'
import loadable from '@loadable/component'

import './css/styles/styles.css'

// import router imports
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Page imports
import Main from './pages/Main'
import Design from './pages/Design'
import Code from './pages/Code'
import About from './pages/About'
import Experience from './pages/Experience'
import Policy from './pages/Policy'
import FourOFour from './pages/404'
// story-pages-import
const WebsiteWinter2020 = loadable(() => import('./pages/story-pages/website-winter-2020'))
const WebsiteSummerAndFall2019 = loadable(() =>
  import('./pages/story-pages/website-summer-fall-2019'),
)
const IntensifEye = loadable(() => import('./pages/story-pages/intensif-eye'))
const Grape = loadable(() => import('./pages/story-pages/grape'))
const GlobalWinery = loadable(() => import('./pages/story-pages/global-winery'))
const Recd = loadable(() => import('./pages/story-pages/recd'))
const Eunoia = loadable(() => import('./pages/story-pages/eunoia'))
const GithubContributionsCounter = loadable(() =>
  import('./pages/story-pages/github-contributions-counter'),
)
const ThonkJs = loadable(() => import('./pages/story-pages/thonk-js'))
const ArduinoScreaming = loadable(() => import('./pages/story-pages/arduino-screaming'))
const ThisWebsite = loadable(() => import('./pages/story-pages/this-website'))

// experience-pages-import
const Hootsuite = loadable(() => import('./pages/experience-pages/hootsuite'))
const FingerFoodATG = loadable(() => import('./pages/experience-pages/ffatg'))
const EnvCanada = loadable(() => import('./pages/experience-pages/env-canada'))
const Puma = loadable(() => import('./pages/experience-pages/puma'))

window.env = process.env.NODE_ENV
if (window.env !== 'development') {
  // disable console errors in production
  // eslint-disable-next-line no-console
  console.error = () => {}
  // eslint-disable-next-line no-console
  console.warn = () => {}
} else {
  // eslint-disable-next-line no-console
  console.log('%c Welcome to Development! ', 'background: #222; color: orange')
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/design">
          <Design />
        </Route>
        <Route path="/code">
          <Code />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/policy">
          <Policy />
        </Route>
        <Route path="/website-winter-2020">
          <WebsiteWinter2020 />
        </Route>
        <Route path="/website-summer-fall-2019">
          <WebsiteSummerAndFall2019 />
        </Route>
        <Route path="/intensif-eye">
          <IntensifEye />
        </Route>
        <Route path="/grape">
          <Grape />
        </Route>
        <Route path="/global-winery">
          <GlobalWinery />
        </Route>
        <Route path="/recd">
          <Recd />
        </Route>
        <Route path="/eunoia">
          <Eunoia />
        </Route>
        <Route path="/github-contributions-counter">
          <GithubContributionsCounter />
        </Route>
        <Route path="/thonk-js">
          <ThonkJs />
        </Route>
        <Route path="/arduino-screaming">
          <ArduinoScreaming />
        </Route>
        <Route path="/this-website">
          <ThisWebsite />
        </Route>
        <Route path="/puma">
          <Puma />
        </Route>
        <Route path="/hootsuite">
          <Hootsuite />
        </Route>
        <Route path="/finger-food-atg">
          <FingerFoodATG />
        </Route>
        <Route path="/environment-canada">
          <EnvCanada />
        </Route>
        <Route path="*">
          <FourOFour />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorker.unregister()
