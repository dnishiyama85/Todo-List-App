import React, { Component } from 'react';
import './App.css';
import TodoLists from './containers/Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoLists />
      </div>
    );
  }
}

export default App;
