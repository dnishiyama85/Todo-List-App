import React from 'react';
import TodoList from './TodoList';

export default class TodoLists extends React.Component {

  render() {
    const props = this.props;
    const todoLists = this.props.todo.todoLists;
    const todoListsComponents = Object.keys(todoLists)
                                .sort((a, b) => todoLists[b].type - todoLists[a].type) // 積んどくリストは下に。
                                .map((listId) => {
      return (
        <TodoList
          key={listId}
          todoList={todoLists[listId]}
          listId={listId}
          sortTodo={ props.sortTodo }
          addTodo={ props.addTodo }
          completeTodo={ props.completeTodo }
          deleteTodo={ props.deleteTodo }
          startTodo={ props.startTodo }
          resetTodo={ props.resetTodo }
        />);
    });

    return (
      <div>
        {todoListsComponents}
      </div>
    );
  }
}
