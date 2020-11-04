import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
} from '@material-ui/core';

export const AddTodoDialog = ({ open, addTodoAction, onClose }) => {
  const [todoText, setTodoText] = useState('');
  const isAddButtonDisabled = todoText.length === 0;

  const tearDown = () => {
    setTodoText('');
    onClose();
  };

  const handleTodoTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleTodoAddClick = () => {
    addTodoAction(todoText);
    tearDown();
  };

  const handleEnterKeyPress = (event) => {
    if (!isAddButtonDisabled && event.key === 'Enter') {
      handleTodoAddClick();
      event.preventDefault();
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={tearDown}
        aria-labelledby="add-todo-dialog"
        disableBackdropClick
      >
        <DialogTitle id="add-todo-dialog">Add Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add anything you would like to do, keep it small to make sure you
            can achieve your goals.
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
          <Button onClick={tearDown} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleTodoAddClick}
            color="primary"
            type="submit"
            disabled={isAddButtonDisabled}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
