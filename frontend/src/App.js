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
      p: {},
      log: [],
    };
  }

  UNSAFE_componentWillMount() {
    const urlencoded = new URLSearchParams();
    urlencoded.append('mac_address', '4koL01COaoM8');
    const requestOptions = {
      method: 'POST',
      body: urlencoded,
      redirect: 'follow',
    };

    Promise.all([
      fetch('/api/processes_tree/', requestOptions)
        .then((p) => p.json()),
      fetch('/api/get_log/')
        .then((log) => log.json()),
    ]).then(([p, log]) => { this.setState({ p }); this.setState({ log }); });
  }


  render() {
    const { p } = this.state;
    const { log } = this.state;

    return (
      <div>

        <Router>
          <Menu />
          <Switch>
            <Route exact path="/">
              <Content processes={p} />
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
