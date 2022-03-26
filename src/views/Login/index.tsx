import React, { FormEvent, useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Box, TextField, Button, Snackbar } from '@mui/material';
import { AuthContext } from 'context/AuthContext';

function Login() {
  const { authenticated, requestOtpCode, attemptToLogin } = useContext(AuthContext);
  const [otpCodeRequested, setOtpCodeRequested] = useState<boolean>(false);
  const [otpCodeError, setOtpCodeError] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [userCode, setUserCode] = useState<string>('');

  async function handleRequestOtpCode(e: FormEvent) {
    e.preventDefault();

    const error = await requestOtpCode(userId);

    if (error) setOtpCodeError(error);
    else setOtpCodeRequested(true);
  }

  async function handleLoginAttempt(e: FormEvent) {
    e.preventDefault();

    const error = await attemptToLogin(userId, userCode);

    if (error) setLoginError(error);
  }

  function renderRequestOtpCodeForm() {
    return (
      <form onSubmit={handleRequestOtpCode}>
        <Box display="flex" flexWrap="wrap">
          <TextField
            sx={{ width: '100%', mb: '10px' }}
            label="User ID"
            variant="outlined"
            size="small"
            value={userId}
            error={otpCodeError.length > 0}
            onChange={e => setUserId(e.target.value)}
          />
          <Button sx={{ width: '100%' }} type="submit" variant="contained">
            Request code
          </Button>
        </Box>
        <Snackbar
          open={otpCodeError.length > 0}
          autoHideDuration={5000}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          message={otpCodeError}
          onClose={() => setOtpCodeError('')}
        />
      </form>
    );
  }

  function renderLoginForm() {
    return (
      <form onSubmit={handleLoginAttempt}>
        <Box display="flex" flexWrap="wrap">
          <TextField
            sx={{ width: '100%', mb: '10px' }}
            label="User ID"
            variant="outlined"
            size="small"
            value={userId}
            disabled
            onChange={e => setUserId(e.target.value)}
          />
          <TextField
            sx={{ width: '100%', mb: '30px' }}
            label="Code"
            variant="outlined"
            value={userCode}
            error={loginError.length > 0}
            size="small"
            onChange={e => setUserCode(e.target.value)}
          />
          <Button sx={{ width: '100%' }} type="submit" variant="contained">
            Login
          </Button>
          <Snackbar
            open={loginError.length > 0}
            autoHideDuration={5000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            message={loginError}
            onClose={() => setLoginError('')}
          />
        </Box>
      </form>
    );
  }

  if (authenticated) return <Navigate to="/" />;

  return <Box sx={{ width: '250px' }}>{otpCodeRequested ? renderLoginForm() : renderRequestOtpCodeForm()}</Box>;
}

export default Login;
