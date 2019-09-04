import {ADD_TODO, UPDATE_TODO, DELETE_TODO, TODOS} from '../const';

const initialState = {
    todos: TODOS,
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      action.todo.id = state.todos.length + 1;
      return {
        todos: [
            ...state.todos,
            action.todo
        ],
      };
    case UPDATE_TODO:
        let todos = [...state.todos];
        let indexOfUpdate = todos.findIndex((todo) =>{
            return todo.id == action.todo.id;
        });
        todos[indexOfUpdate] = action.todo;
        return {
            ...state,
            todos: todos,
        }
    case DELETE_TODO:
        return {
            todos: state.todos.filter(function(todo) {
                return todo.id != action.todo.id;
            })
        }
    default:
      return state;
  }
}


