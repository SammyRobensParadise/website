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

// story-pages-import
import WebsiteWinter2020 from './pages/story-pages/website-winter-2020'
import WebsiteSummerAndFall2019 from './pages/story-pages/website-summer-fall-2019'
import IntensifEye from './pages/story-pages/intensif-eye'
import Grape from './pages/story-pages/grape'
import GlobalWinery from './pages/story-pages/global-winery'
import Recd from './pages/story-pages/recd'
import Eunoia from './pages/story-pages/eunoia'
import GithubContributionsCounter from './pages/story-pages/github-contributions-counter'
import ThonkJs from './pages/story-pages/thonk-js'
import ArduinoScreaming from './pages/story-pages/arduino-screaming'
import ThisWebsite from './pages/story-pages/this-website'
// main application entiry point

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
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorker.unregister()
