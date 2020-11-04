import {
  Typography,
  Box,
  makeStyles,
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core';

const useStyles = makeStyles({
  cardHolder: {
    position: 'relative',
  },
  cardContentHolder: {
    height: '55vh',
    maxHeight: '55vh',
    marginBottom: '5rem',
    overflow: 'auto',
  },
});

export const TodoCard = ({ isEmpty, completionText, list, addButton }) => {
  const { cardHolder, cardContentHolder } = useStyles();

  return (
    <Card className={cardHolder}>
      <CardHeader title="Todo App" titleTypographyProps={{ align: 'center' }} />
      <CardContent className={cardContentHolder}>
        {isEmpty ? (
          <>
            <Typography
              variant="body1"
              color="textPrimary"
              align="center"
              gutterBottom
            >
              Looks like you don't have any todos.
            </Typography>
            <Typography variant="body1" align="center">
              Create one using the "+" button below.
            </Typography>
          </>
        ) : (
          <>
            <Typography
              variant="body1"
              color="textPrimary"
              align="center"
              gutterBottom
            >
              {completionText}
            </Typography>
            {list}
          </>
        )}
      </CardContent>
      <Box mt={3}>{addButton}</Box>
    </Card>
  );
};
