import { connect } from 'react-redux'
import * as actions from '../actions/Todo';
import Todo from '../components/TodoList';

const mapStateToProps = state => {
  return {
    todo: state.todo,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo:      (todo) => dispatch(actions.addTodo(todo)),
    completeTodo: (todo) => dispatch(actions.completeTodo(todo)),
    deleteTodo:   (todo) => dispatch(actions.deleteTodo(todo)),
    startTodo:    (todo) => dispatch(actions.startTodo(todo)),
    resetTodo:  (todo) => dispatch(actions.resetTodo(todo)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
