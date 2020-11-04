import { IconButton, makeStyles } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';


const useStyles = makeStyles({
  addIconButtonHolder: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%)',
  },
  addIconHolder: {
    transition: 'opacity 0.3s',
    fontSize: '4rem',
    fill: '#fcb770',
  },
});

export const TodoAddButton = ({onClick}) => {
  const { addIconButtonHolder, addIconHolder } = useStyles();
  return (
    <IconButton
      aria-label="add"
      onClick={onClick}
      className={addIconButtonHolder}
    >
      <AddCircle className={addIconHolder} />
    </IconButton>
  );
};
