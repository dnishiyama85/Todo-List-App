import React from 'react';

export default class Todo extends React.Component {

  _startButton(todo) {
    if (todo.start) {
      return (<span>{ todo.start.toLocaleTimeString() }〜</span>);
    } else {
      const onStart = this.props.onStart;
      return (<button onClick={ () => onStart(todo) }>開始</button>);
    }
  }

  _status(todo) {
    if (todo.start && todo.finish) {
      const delta = Math.floor((todo.finish.getTime() - todo.start.getTime()) / 1000 / 60);
      return (<span>完了 ({delta}min.)</span>);
    } else if (todo.start) {
      return (<span>実行中</span>);
    } else {
      return (<span>未実行</span>);
    }
  }

  render() {
    const todo = this.props.todo;
    const onComplete = this.props.onComplete;
    const onDelete = this.props.onDelete;
    const completed = todo.isCompleted ? 'completed' : '';
    return (
      <ul className='todo_item'>
        <li><span className={completed}><input type='checkbox' checked={ todo.isCompleted } onChange={ () => onComplete(todo) }/>{ todo.title }</span></li>
        <li><span>{todo.estimation}min.</span></li>
        <li>{ this._status(todo) }</li>
        <li>{ this._startButton(todo) }</li>
        <li><span><button onClick={ () => onDelete(todo) }><span>x</span></button></span></li>
      </ul>
    )
  }
}
