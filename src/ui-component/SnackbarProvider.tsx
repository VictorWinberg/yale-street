import { Alert, AlertColor, Snackbar } from '@mui/material';
import { FunctionComponent, PropsWithChildren, createContext, useState } from 'react';

export interface SnackbarContextType {
  showSnackbar: (message: string, severity?: AlertColor) => void;
}

export const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

const SnackbarProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as AlertColor
  });

  const showSnackbar = (message: string, severity: AlertColor = 'success') => {
    setSnackbar({
      open: true,
      message,
      severity
    });
  };

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
