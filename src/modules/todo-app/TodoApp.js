import { Typography } from '@material-ui/core';

const Header = () => (
  <Typography variant="h2" gutterBottom>
    Todo App
  </Typography>
);

export const TodoApp = () => {
  return (
    <>
      <Header />
    </>
  );
};
