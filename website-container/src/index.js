import React from 'react'
import ReactDOM from 'react-dom'
import './css/styles/styles.css'
import Main from './pages/Main'
import Design from './pages/Design'
import Code from './pages/Code'
import About from './pages/About'
import Experience from './pages/Experience'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorker.unregister()
