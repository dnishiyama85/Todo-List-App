import React from 'react';
import Todo from './Todo.jsx';
import ReactSortable from 'react-sortablejs';

export default class TodoList extends React.Component {

  // テキストボックス内のテキスト
  state = {
    todo: ''
  };

  onClickAdd() {
    this.props.addTodo(this.state.todo, this.props.listId);
    document.getElementById('input_add_todo_' + this.props.listId).value='';
    this.setState({ todo: '' });
  }

  onSubmit(e) {
    e.preventDefault();
    this.onClickAdd();
  }

  onChange(ids) {
    this.props.sortTodo(ids, this.props.listId);
  }

  sortable = null;

  render() {
    // Store の Todo からリストを生成
    const todoList = this.props.todoList.list.filter( (todo) => !todo.isCompleted );
    const completedList = this.props.todoList.list.filter( (todo) => todo.isCompleted);

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
      <div className='todo_list'>
        <h2>{this.props.todoList.date}</h2>
        <form onSubmit={ this.onSubmit.bind(this) }>
          <input id={'input_add_todo_' + this.props.listId } type="text" onChange={elm => this.setState({ todo: elm.target.value })}/>
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
