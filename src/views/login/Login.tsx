import { FormEvent, useState, useContext } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { AuthContext } from 'context/AuthContext';

function Login() {
  const { requestOtpCode } = useContext(AuthContext);
  const [otpCodeRequested, setOtpCodeRequested] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>('');
  const [userCode, setUserCode] = useState<string>('');

  async function handleRequestOtpCode(e: FormEvent) {
    e.preventDefault();

    await requestOtpCode();

    setOtpCodeRequested(true);

    console.log('requesting otp code');
  }

  function handleLoginAttempt(e: FormEvent) {
    e.preventDefault();

    console.log('handling login');
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
            onChange={(e) => setUserId(e.target.value)}
          />
          <Button sx={{ width: '100%' }} type="submit" variant="contained">
            Request code
          </Button>
        </Box>
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
            onChange={(e) => setUserId(e.target.value)}
          />
          <TextField
            sx={{ width: '100%', mb: '30px' }}
            label="Code"
            variant="outlined"
            value={userCode}
            size="small"
            onChange={(e) => setUserCode(e.target.value)}
          />
          <Button sx={{ width: '100%' }} type="submit" variant="contained">
            Login
          </Button>
        </Box>
      </form>
    );
  }

  return <Box sx={{ width: '250px' }}>{otpCodeRequested ? renderLoginForm() : renderRequestOtpCodeForm()}</Box>;
}

export default Login;
