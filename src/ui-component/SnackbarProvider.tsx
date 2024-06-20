import { Alert, AlertColor, Snackbar } from '@mui/material';
import { FunctionComponent, PropsWithChildren, createContext, useState } from 'react';

const TIMEOUT = 6000; // 6 seconds

export interface SnackbarContextType {
  showSnackbar: (message: string, severity?: AlertColor) => void;
}

export const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

type Snackbar = { message: string; severity: AlertColor };

const SnackbarProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [snackbars, setSnackbars] = useState<Snackbar[]>([]);
  const [open, setOpen] = useState(false);
  const snackbar = snackbars[0] || { message: '', severity: 'success' };

  const showSnackbar = (message: string, severity: AlertColor = 'success') => {
    setSnackbars([...snackbars, { message, severity }]);
    setOpen(!open);
  };

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleExited = () => {
    setSnackbars(snackbars.slice(1));

    if (snackbars.length > 1) {
      setOpen(true);
    }
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={TIMEOUT}
        onClose={handleClose}
        TransitionProps={{ onExited: handleExited }}
      >
        <Alert onClose={handleClose} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
