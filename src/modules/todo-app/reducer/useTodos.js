import { useReducer } from 'react';

import { reducer, initialState } from './reducer';
import { ACTION_TYPES } from './constants';

export const useTodos = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todos, editedTodo } = state;
  const todosCount = todos.length;
  const isTodoCardEmpty = todosCount === 0;
  const completedTodosCount = todos.reduce(
    (acc, { isCompleted }) => (isCompleted ? ++acc : acc),
    0
  );
  const areAllTodosCompleted = todosCount === completedTodosCount;
  const sortedTodosByCompletion = todos.sort(
    (a, b) => a.isCompleted - b.isCompleted
  );

  const addTodoAction = (payload) => {
    dispatch({ type: ACTION_TYPES.add, payload });
  };

  const toggleTodoAction = (payload) => {
    dispatch({ type: ACTION_TYPES.toggle, payload });
  };

  const setEditedTodo = (payload) => {
    dispatch({ type: ACTION_TYPES.setEditedTodo, payload });
  };

  const editTodoAction = (payload) => {
    dispatch({ type: ACTION_TYPES.edit, payload });
  };

  const deleteTodoAction = (payload) => {
    dispatch({ type: ACTION_TYPES.delete, payload });
  };

  return {
    editedTodo,
    todosCount,
    isTodoCardEmpty,
    completedTodosCount,
    areAllTodosCompleted,
    sortedTodosByCompletion,
    addTodoAction,
    toggleTodoAction,
    setEditedTodo,
    editTodoAction,
    deleteTodoAction,
  };
};
