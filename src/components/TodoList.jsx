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

  onSubmit(e) {
    e.preventDefault();
    this.onClickAdd();
  }

  render() {
    console.log(this.props);

    // Store の Todo からリストを生成
    let todoList = this.props.todo.todoList.filter( (todo) => !todo.isCompleted ).reverse();
    const completedList = this.props.todo.todoList.filter( (todo) => todo.isCompleted).reverse();
    todoList = todoList.concat(completedList);
    const list = todoList.map((todo, index) => {
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
        <form onSubmit={ this.onSubmit.bind(this) }>
          <input id='input_add_todo' type="text" onChange={elm => this.setState({ todo: elm.target.value })}/>
          <button type='submit' onClick={ () => this.onClickAdd() }>追加</button>
        </form>
        <br/>
        <ul>
          { list }
        </ul>
      </div>
    );
  }
}
