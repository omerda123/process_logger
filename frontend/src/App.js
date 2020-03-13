/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Parent from './components/Parent';
import Child from './components/Child';
import './App.css';

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
        {
          Object.keys(p).map((process) => (
            <div>
              <Parent name={p[process].name} number={process} />
              {
              p[process].children
                ? p[process].children.map((child) => (<Child name={child.name} number={child.pid} />))
                : null
               }
            </div>
          ))
        }
      </div>
    );
  }
}
