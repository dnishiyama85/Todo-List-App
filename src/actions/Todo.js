export const addTodo = (title) => {
  return {
    type: 'ADD_TODO',
    payload: { title: title }
  };
};

export const completeTodo = (todo) => {
  return {
    type: 'COMPLETE_TODO',
    payload: { todo: todo }
  }
};

export const deleteTodo = (todo) => {
  return {
    type: 'DELETE_TODO',
    payload: { todo: todo }
  }
};

export const startTodo = (todo) => {
  return {
    type: 'START_TODO',
    payload: { todo: todo }
  }
};
