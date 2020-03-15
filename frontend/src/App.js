/* eslint-disable react/jsx-filename-extension */
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import Content from './components/Content';
import Logger from './components/Logger';
import Risks from './components/Risks';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      processes: {},
      log: [],
    };
  }

  UNSAFE_componentWillMount() {
    Promise.all([
      fetch('/api/processes/')
        .then((processes) => processes.json()),
      fetch('/api/get_log/')
        .then((log) => log.json()),
    ]).then(([processes, log]) => { this.setState({ processes }); this.setState({ log }); });
  }


  render() {
    const { processes } = this.state;
    const { log } = this.state;

    return (
      <div>

        <Router>
          <Menu />
          <Switch>
            <Route exact path="/">
              <Content processes={processes} />
            </Route>
            <Route exact path="/logger">
              <Logger log={log} />
            </Route>
            <Route exact path="/risks">
              <Risks />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
