export const addTodo = (title, listId) => {
  return {
    type: 'ADD_TODO',
    payload: { title, listId }
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

export const resetTodo = (todo) => {
  return {
    type: 'RESET_TODO',
    payload: { todo: todo }
  }
};

// データ取得完了
export const dataFetchCompleted = (fetchedState) => {
  return {
    type: 'DATA_FETCH_COMPLETED',
    payload: { fetchedState: fetchedState }
  }
};

// 並び替え
export const sortTodo = (ids, listId) => {
  return {
    type: 'SORT_TODO',
    payload: { ids, listId }
  }
};
