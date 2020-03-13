import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      processes : {}
    };
}

  componentWillMount(){
    fetch('/api/processes/')
    .then((processes) => processes.json())
    .then((processes) => this.setState({ processes }));
  }


  render() {
    const p = this.state.processes

    return (
      <div>
        {
          Object.keys(p).map(process =>{
            return(
              <div> {p[process]['name']} {process} 
              {
              p[process]['children']?
              p[process]['children'].map(child =>{
                return(child['name'])
              })
               : null
               }
              </div>
            )
          })
        }
      </div>
    )
  }
}
