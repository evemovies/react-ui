import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';
import { AuthContext } from '@/contexts/AuthContext';
import LoginForm from './components/LoginForm';
import LoginError from './components/LoginError';
import { ILoginFormCallback } from './types';

const test = () => new Promise((resolve, reject) => reject('hello'));

function Login() {
  const { authenticated, requestOtpCode, attemptToLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState<string | undefined>(undefined);
  const [otpCodeRequested, setOtpCodeRequested] = useState(false);
  const handleError = useErrorHandler();

  const handleLogin = async ({ userId, otpCode }: ILoginFormCallback) => {
    const error = await attemptToLogin(userId, otpCode).catch(err => handleError(err));

    setLoginError(error || '');
  };

  const handleRequestOtpCode = async (userId: string) => {
    const error = await requestOtpCode(userId).catch(err => handleError(err));

    if (error) setLoginError(error);
    else setOtpCodeRequested(true);
  };

  if (authenticated) return <Navigate to="/dashboard" />;

  return (
    <div>
      <LoginForm otpCodeRequested={otpCodeRequested} onLogin={handleLogin} onRequestOtpCode={handleRequestOtpCode} />
      {loginError && <LoginError />}
    </div>
  );
}

export default Login;
