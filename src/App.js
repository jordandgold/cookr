import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button variant="primary">Add Recipe</Button>
        </header>
      </div>
    );
  }
}

export default App;
