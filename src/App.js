import React, { Component } from 'react';
import Header from './common/header';
import Content from './common/content'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
