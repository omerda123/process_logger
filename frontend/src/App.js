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
    };
  }

  UNSAFE_componentWillMount() {
    fetch('/api/processes/')
      .then((processes) => processes.json())
      .then((processes) => this.setState({ processes }));
  }


  render() {
    const p = this.state.processes;

    return (
      <div>

        <Router>
          <Menu />
          <Switch>
            <Route exact path="/">
              <Content processes={p} />
            </Route>
            <Route exact path="/logger">
              <Logger />
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
