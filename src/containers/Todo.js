import { connect } from 'react-redux'
import * as actions from '../actions/Todo';
import TodoLists from '../components/TodoLists';

const mapStateToProps = state => {
  return {
    todo: state.todo,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo:      (todo, listId) => dispatch(actions.addTodo(todo, listId)),
    completeTodo: (todo) => dispatch(actions.completeTodo(todo)),
    deleteTodo:   (todo) => dispatch(actions.deleteTodo(todo)),
    startTodo:    (todo) => dispatch(actions.startTodo(todo)),
    resetTodo:    (todo) => dispatch(actions.resetTodo(todo)),
    sortTodo:     (ids, listId) => dispatch(actions.sortTodo(ids, listId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);
