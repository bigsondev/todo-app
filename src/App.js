import {
  CssBaseline,
  Container,
  Box,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core';

import { TodoApp } from './modules';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          // Neat trick to show outlines of components
          // outline: '1px solid red',
        },
      },
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box my={10}>
          <TodoApp />
        </Box>
      </Container>
    </ThemeProvider>
  );
};
