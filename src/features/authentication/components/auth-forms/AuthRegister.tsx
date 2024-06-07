import { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// third party
import { useForm } from 'react-hook-form';

// project imports
import Google from '@/assets/images/icons/social-google.svg';
import AnimateButton from '@/ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from '@/utils/password-strength';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// ===========================|| FIREBASE - REGISTER ||=========================== //

type Auth = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
};

const AuthRegister = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<Auth>();

  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState(strengthColor(strength));

  const googleHandler = async () => {
    console.error('Register');
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: MouseEvent) => {
    event.preventDefault();
  };

  const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const temp = strengthIndicator(value);

    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <AnimateButton>
            <Button
              variant="outlined"
              fullWidth
              onClick={googleHandler}
              size="large"
              sx={{
                color: 'grey.700',
                backgroundColor: theme.palette.grey[50],
                borderColor: theme.palette.grey[100]
              }}
            >
              <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
              </Box>
              Sign up with Google
            </Button>
          </AnimateButton>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            <Button
              variant="outlined"
              sx={{
                cursor: 'unset',
                m: 2,
                py: 0.5,
                px: 7,
                borderColor: `${theme.palette.grey[100]} !important`,
                color: `${theme.palette.grey[900]}!important`,
                fontWeight: 500,
                borderRadius: '6px'
              }}
              disableRipple
              disabled
            >
              OR
            </Button>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Sign up with Email address</Typography>
          </Box>
        </Grid>
      </Grid>

      <form noValidate onSubmit={handleSubmit(console.log)}>
        <Grid container spacing={matchDownSM ? 0 : 2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              margin="normal"
              type="text"
              sx={{ ...theme.typography.customInput }}
              {...register('firstName', {
                maxLength: { value: 255, message: 'First Name is too long' }
              })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              margin="normal"
              type="text"
              sx={{ ...theme.typography.customInput }}
              {...register('lastName', {
                maxLength: { value: 255, message: 'Last Name is too long' }
              })}
            />
          </Grid>
        </Grid>
        <FormControl fullWidth error={Boolean(errors.email)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-email-register">Email Address / Username</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email-register"
            type="email"
            inputProps={{}}
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Must be a valid email address' },
              maxLength: { value: 255, message: 'Email address is too long' }
            })}
          />
          {errors.email && (
            <FormHelperText error id="standard-weight-helper-text--register">
              {errors.email.message}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth error={Boolean(errors.password)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password-register"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...register('password', { required: 'Password is required', onChange: changePassword })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="large"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            inputProps={{}}
          />
          {errors.password && (
            <FormHelperText error id="standard-weight-helper-text-password-register">
              {errors.password.message}
            </FormHelperText>
          )}
        </FormControl>

        {strength !== 0 && (
          <FormControl fullWidth>
            <Box sx={{ mb: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Box style={{ backgroundColor: level?.color }} sx={{ width: 85, height: 8, borderRadius: '7px' }} />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" fontSize="0.75rem">
                    {level?.label}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </FormControl>
        )}

        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(event) => setChecked(event.target.checked)}
                  name="checked"
                  color="primary"
                />
              }
              label={
                <Typography variant="subtitle1">
                  Agree with &nbsp;
                  <Typography variant="subtitle1" component={Link} to="#">
                    Terms & Condition.
                  </Typography>
                </Typography>
              }
            />
          </Grid>
        </Grid>
        {errors.root && (
          <Box sx={{ mt: 3 }}>
            <FormHelperText error>{errors.root.message}</FormHelperText>
          </Box>
        )}

        <Box sx={{ mt: 2 }}>
          <AnimateButton>
            <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary">
              Sign up
            </Button>
          </AnimateButton>
        </Box>
      </form>
    </>
  );
};

export default AuthRegister;
