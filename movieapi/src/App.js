import React from 'react';
import './App.css';
import Search from "../src/Search";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <Search/>
      </div>
    );
  }
}

export default App;
