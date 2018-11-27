import React from 'react';
import Todo from './Todo.jsx';

export default class TodoList extends React.Component {

  state = {
    todo: ''
  };

  onClickAdd() {
    this.props.addTodo(this.state.todo);
    document.getElementById('input_add_todo').value='';
    this.setState({ todo: '' });
  }

  render() {
    console.log(this.props);

    // Store の Todo からリストを生成
    const list = this.props.todo.todoList.reverse().map((todo, index) => {
      return (
        <li key={ index }>
          <Todo todo={ todo }
                onComplete={ this.props.completeTodo }
                onDelete={ this.props.deleteTodo }
                onStart={ this.props.startTodo }
          />
        </li>)
    });

    return (
      <div>
        <input id='input_add_todo' type="text" onChange={elm => this.setState({ todo: elm.target.value })}/>
        <button onClick={ () => this.onClickAdd() }>追加</button>
        <br/>
        <ul>
          { list }
        </ul>
      </div>
    );
  }
}
