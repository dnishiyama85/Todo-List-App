let id = 1;

const initialState = {
    todoList: []
};

export const todoReducer = (state = initialState, action) => {

  switch(action.type) {
    case 'ADD_TODO': {
      if (!action.payload.title) {
        return state;
      }
      // 新規作成
      const todo = {
        id: id,
        title: action.payload.title,
        estimation: 15,
        start: null,
        finish: null,
        isCompleted: false,
        children: [],
      };
      id++;
      const newState = Object.assign({}, state);
      newState.todoList.push(todo);
      return newState;
    }

    case 'COMPLETE_TODO': {
      const todo = action.payload.todo;
      const newState = Object.assign({}, state);

      newState.todoList.forEach((td) => {
        if (td.id === todo.id) {
          td.isCompleted = !todo.isCompleted;
          td.finish = todo.isCompleted ? new Date() : null;
          // 開始してないのに終了する場合、開始時刻 = 終了時刻としてしまう
          if (todo.isCompleted && !td.start) {
            td.start = td.finish;
          }
        }
      });

      return newState;
    }

    case 'DELETE_TODO': {
      const todo = action.payload.todo;
      const newState = Object.assign({}, state);
      newState.todoList = state.todoList.filter(td => td.id !== todo.id);
      return newState;
    }

    case 'START_TODO': {
      const todo = action.payload.todo;
      const newState = Object.assign({}, state);
      newState.todoList.forEach((td) => {
        if (td.id === todo.id) {
          td.start = new Date();
        }
      });
      return newState;
    }

    default:
      return state;
  }
};
