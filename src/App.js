import { CssBaseline, Container, Box, Grid } from '@material-ui/core';

import { TodoApp } from './modules';

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box my={10}>
          <Grid container justify="center">
            <TodoApp />
          </Grid>
        </Box>
      </Container>
    </>
  );
};
