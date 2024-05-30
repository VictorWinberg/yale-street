import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// project imports
import ErrorBoundary from '@/layout/ErrorBoundary';
import NavigationScroll from '@/layout/NavigationScroll';
import router from '@/routes';
import StoreProvider from '@/store';
import theme from '@/theme';

// ==============================|| APP ||============================== //

const queryClient = new QueryClient();

const App = () => {
  return (
    <ErrorBoundary name="App">
      <QueryClientProvider client={queryClient}>
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
        <ReactQueryDevtools initialIsOpen position="right" buttonPosition="bottom-right" />
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
