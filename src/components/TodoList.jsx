import React from 'react';
import Todo from './Todo.jsx';
import ReactSortable from 'react-sortablejs';

export default class TodoList extends React.Component {

  // テキストボックス内のテキスト
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

  onChange(ids) {
    this.props.sortTodo(ids);
  }

  sortable = null;

  render() {
    console.log(this.props);

    // Store の Todo からリストを生成
    const todoList = this.props.todo.todoList.filter( (todo) => !todo.isCompleted );
    const completedList = this.props.todo.todoList.filter( (todo) => todo.isCompleted);



    const list = todoList.map((todo, index) => {
      return (
        <li className='todo_li' key={ index } data-id={ todo.id }>
          <Todo todo={ todo }
                onComplete={ this.props.completeTodo }
                onDelete={ this.props.deleteTodo }
                onStart={ this.props.startTodo }
                onReset={ this.props.resetTodo }
          />
        </li>)
    });
    const completedListC = completedList.map((todo, index) => {
      return (
        <li className='todo_li' key={ index } index={ index }>
          <Todo todo={ todo }
                onComplete={ this.props.completeTodo }
                onDelete={ this.props.deleteTodo }
                onStart={ this.props.startTodo }
                onReset={ this.props.resetTodo }
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
        <ReactSortable
          options = { {
            animation: 150,
            handle: '.my-handle',
          } }
          ref={(c) => {
            if (c) {
              this.sortable = c.sortable;
            }
          }}
          tag='ul'
          onChange={ (order, sortable, evt) => {
            this.onChange(order);
          }}
        >
          { list }
        </ReactSortable>
        <ul>
          { completedListC }
        </ul>
      </div>
    );
  }
}
