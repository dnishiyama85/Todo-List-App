import $ from 'jquery';
import Config from '../config';

const initialState = {
    todoList: []
};

function getUniqueStr(myStrong){
  let strong = 1000;
  if (myStrong) strong = myStrong;
  return new Date().getTime().toString(16)  + Math.floor(strong*Math.random()).toString(16)
}

const saveState = (state) => {
  $.post(Config.apiURL + '/put', JSON.stringify(state))
    .done( () => console.log('save done'))
    .fail( () => alert('save failed'));
};

export const todoReducer = (state = initialState, action) => {

  switch(action.type) {
    case 'ADD_TODO': {
      if (!action.payload.title) {
        return state;
      }
      // 新規作成
      const todo = {
        id: getUniqueStr(),
        title: action.payload.title,
        estimation: 15,
        start: null,
        finish: null,
        isCompleted: false,
        children: [],
      };
      const newState = Object.assign({}, state);
      newState.todoList.push(todo);

      saveState(newState);
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

      saveState(newState);
      return newState;
    }

    case 'DELETE_TODO': {
      const todo = action.payload.todo;
      const newState = Object.assign({}, state);
      newState.todoList = state.todoList.filter(td => td.id !== todo.id);

      saveState(newState);
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
      saveState(newState);
      return newState;
    }

    case 'DATA_FETCH_COMPLETED': {
      const fetchedState = action.payload.fetchedState;
      const newState = fetchedState;
      // 日付をオブジェクトに
      newState.todoList.forEach( (todo) => {
        if (todo.start) {
          todo.start = new Date(todo.start);
        }
        if (todo.finish) {
          todo.finish = new Date(todo.finish);
        }
      });
      return newState;
    }

    default:
      return state;
  }
};
