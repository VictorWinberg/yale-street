import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// project imports
import ErrorBoundary from '@/layout/ErrorBoundary';
import NavigationScroll from '@/layout/NavigationScroll';
import router from '@/routes';
import StoreProvider from '@/store';
import theme from '@/theme';

// ==============================|| APP ||============================== //

const App = () => {
  return (
    <ErrorBoundary name="App">
      <StoreProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme()}>
            <CssBaseline />
            <NavigationScroll>
              <RouterProvider router={router} />
            </NavigationScroll>
          </ThemeProvider>
        </StyledEngineProvider>
      </StoreProvider>
    </ErrorBoundary>
  );
};

export default App;
