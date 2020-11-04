import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
} from '@material-ui/core';

export const EditTodoDialog = ({
  open,
  editedTodo,
  editTodoAction,
  onClose,
}) => {
  const [todoText, setTodoText] = useState(editedTodo.text);
  const isAddButtonDisabled = todoText.length === 0;

  useEffect(() => {
    setTodoText(editedTodo.text);
  }, [editedTodo.text]);

  const handleTodoTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleTodoEditClick = () => {
    editTodoAction({ todo: editedTodo, editedText: todoText });
    onClose();
  };

  const handleEnterKeyPress = (event) => {
    if (!isAddButtonDisabled && event.key === 'Enter') {
      handleTodoEditClick();
      event.preventDefault();
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="edit-todo-dialog"
        disableBackdropClick
      >
        <DialogTitle id="edit-todo-dialog">Edit Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Made a typo in todo? No problem, you can edit it anytime.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="todoText"
            label="Todo Text"
            variant="outlined"
            value={todoText}
            onChange={handleTodoTextChange}
            onKeyPress={handleEnterKeyPress}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleTodoEditClick}
            color="primary"
            type="submit"
            disabled={isAddButtonDisabled}
          >
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
