import { updateObjectInArray, removeItem } from './utils';
import { ACTION_TYPES } from './constants';

export const initialState = {
  todos: [
    { id: 1, text: 'Learn by doing', isCompleted: false },
    { id: 2, text: 'Check my website below', isCompleted: false },
    {
      id: 2,
      text: 'Source code also available',
      isCompleted: false,
    },
  ],
  editedTodo: { id: undefined, text: '', isCompleted: false },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.add:
      const newTodo = {
        id: state.todos.length,
        text: action.payload,
        isCompleted: false,
      };

      return { ...state, todos: [...state.todos, newTodo] };
    case ACTION_TYPES.toggle:
      const toggledTodo = {
        ...action.payload,
        isCompleted: !action.payload.isCompleted,
      };

      return {
        ...state,
        todos: updateObjectInArray(state.todos, toggledTodo),
      };
    case ACTION_TYPES.setEditedTodo:
      return { ...state, editedTodo: action.payload };
    case ACTION_TYPES.edit:
      const editedTodo = {
        ...action.payload.todo,
        text: action.payload.editedText,
      };

      return { ...state, todos: updateObjectInArray(state.todos, editedTodo) };
    case ACTION_TYPES.delete:
      return { ...state, todos: removeItem(state.todos, action.payload) };
    default:
      throw new Error();
  }
};
