import React from 'react'
import ReactDOM from 'react-dom'
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

// design-pages-import
import WebsiteWinter2020 from './pages/design-pages/website-winter-2020'

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
        <Route path="/portfolio-winter-2020">
          <WebsiteWinter2020 />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorker.unregister()