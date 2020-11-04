import {
  Typography,
  IconButton,
  List,
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  makeStyles,
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

const useStyles = makeStyles({
  todoTextHolder: {
    maxWidth: '60%',
  },
});

export const TodoList = ({
  todos,
  toggleTodoAction,
  deleteTodoAction,
  onEditTodoClick,
}) => {
  const { todoTextHolder } = useStyles();

  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.text}>
          <ListItemIcon>
            <Checkbox
              checked={todo.isCompleted}
              onChange={() => toggleTodoAction(todo)}
              color="primary"
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography className={todoTextHolder}>
                {todo.isCompleted ? <del>{todo.text}</del> : todo.text}
              </Typography>
            }
          />
          <ListItemSecondaryAction>
            <IconButton aria-label="edit" onClick={() => onEditTodoClick(todo)}>
              <Edit />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => deleteTodoAction(todo.id)}
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};
