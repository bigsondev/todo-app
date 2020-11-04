import { useState } from 'react';
import Fade from 'react-reveal/Fade';

import { TodoCard } from './TodoCard';
import { TodoList } from './TodoList';
import { TodoAddButton } from './TodoAddButton';
import { Footer } from './Footer';
import { AddTodoDialog, EditTodoDialog } from './dialogs';
import { useTodos } from './reducer';

export const TodoApp = () => {
  const [addDialogOpen, toggleAddDialogOpen] = useState(false);
  const [editDialogOpen, toggleEditDialogOpen] = useState(false);
  const {
    editedTodo,
    areAllTodosCompleted,
    completedTodosCount,
    todosCount,
    sortedTodosByCompletion,
    isTodoCardEmpty,
    addTodoAction,
    toggleTodoAction,
    setEditedTodo,
    editTodoAction,
    deleteTodoAction,
  } = useTodos();

  const handleAddDialogClickOpen = () => {
    toggleAddDialogOpen(true);
  };

  const handleAddDialogClickClose = () => {
    toggleAddDialogOpen(false);
  };

  const handleEditDialogClickOpen = () => {
    toggleEditDialogOpen(true);
  };

  const handleEditDialogClickClose = () => {
    toggleEditDialogOpen(false);
  };

  const handleEditTodoClick = (payload) => {
    handleEditDialogClickOpen();
    setEditedTodo(payload);
  };

  return (
    <>
      <Fade>
        <TodoCard
          isEmpty={isTodoCardEmpty}
          completionText={
            areAllTodosCompleted
              ? `You have completed all todos. Good work!`
              : `You have ${completedTodosCount}/${todosCount} todos completed.`
          }
          list={
            <TodoList
              todos={sortedTodosByCompletion}
              toggleTodoAction={toggleTodoAction}
              deleteTodoAction={deleteTodoAction}
              onEditTodoClick={handleEditTodoClick}
            />
          }
          addButton={<TodoAddButton onClick={handleAddDialogClickOpen} />}
        />
        <Footer />
      </Fade>
      <AddTodoDialog
        open={addDialogOpen}
        addTodoAction={addTodoAction}
        onClose={handleAddDialogClickClose}
      />
      <EditTodoDialog
        open={editDialogOpen}
        editedTodo={editedTodo}
        editTodoAction={editTodoAction}
        onClose={handleEditDialogClickClose}
      />
    </>
  );
};
