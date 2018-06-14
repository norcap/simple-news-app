import React, { Component } from 'react'
import moment from 'moment'
import TestAPI from './components/TestAPI'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple News App</h1>
          <h4>A simple News App using newsapi.org's API</h4>
          <hr />
        </header>

        <div className="headlines">
          <span>Headlines:</span>
          <br />
          <span>{moment().format('MMMM Do YYYY, h:mm:ss a')}</span>
        </div>

        <div className="main_section">
          <TestAPI />
        </div>

        <footer>Thanks for using this App</footer>
      </div>
    )
  }
}

export default App
