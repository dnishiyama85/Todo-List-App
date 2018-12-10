import React, { Component } from 'react';
import './App.css';
import TodoLists from './containers/Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>日にちの決まっているものは Google カレンダーへ</h1>
        <TodoLists />
      </div>
    );
  }
}

export default App;
