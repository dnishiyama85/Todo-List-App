import React from 'react';

export default class Todo extends React.Component {

  _startButton(todo) {
    if (todo.start) {
      return (<span className='start_button' >{ todo.start.toLocaleTimeString() }〜</span>);
    } else {
      const onStart = this.props.onStart;
      return (<span className='start_button'><button onClick={ () => onStart(todo) }>開始</button></span>);
    }
  }

  _status(todo) {
    let content = '';
    if (todo.start && todo.finish) {
      const delta = Math.floor((todo.finish.getTime() - todo.start.getTime()) / 1000 / 60);
      content = '完了 (' +  delta + 'min.)';
    } else if (todo.start) {
      const onReset = this.props.onReset;
      return (<span className='status'><span className='doing' onClick={ onReset.bind(null, todo) }>実行中</span></span>);
    } else {
      content = '未実行';
    }
    return (<span className='status'>{ content }</span>);
  }

  render() {
    const todo = this.props.todo;
    const onComplete = this.props.onComplete;
    const onDelete = this.props.onDelete;
    const completed = todo.isCompleted ? ' completed' : '';
    const draggable = todo.isCompleted ? (<span className='todo_item_handle'></span>) : (<span className='todo_item_handle my-handle'>::</span>);
    return (
      <div>
        { draggable }
        <ul className='todo_item'>
          <li><span className={'title' + completed}><input type='checkbox' checked={ todo.isCompleted } onChange={ () => onComplete(todo) }/>{ todo.title }</span></li>
          <li><span className='estimation'>{todo.estimation}min.</span></li>
          <li><span className='status'>{ this._status(todo) }</span></li>
          <li>{ this._startButton(todo) }</li>
          <li><span><button onClick={ () => onDelete(todo) }><span>x</span></button></span></li>
        </ul>
      </div>
    )
  }
}
