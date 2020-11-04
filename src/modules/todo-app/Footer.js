import { Typography, Box, Link, makeStyles } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';

const useStyles = makeStyles({
  linkHolder: {
    textDecoration: 'underline',
  },
});

export const Footer = () => {
  const { linkHolder } = useStyles();
  return (
    <Box mt={3}>
      <Typography align="center" variant="body2">
        Made with <Favorite color="secondary" /> by{' '}
        <Link
          href="https://bigsondev.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkHolder}
        >
          BigsonDev
        </Link>
        . Source code available on{' '}
        <Link
          href="https://github.com/bigsondev/todo-app"
          target="_blank"
          rel="noopener noreferrer"
          className={linkHolder}
        >
          GitHub
        </Link>
        .
      </Typography>
    </Box>
  );
};
