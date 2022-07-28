import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';
import { notification } from 'antd';
import { AuthContext } from '@/contexts/AuthContext';
import LoginForm from './components/LoginForm';
import { ILoginFormCallback } from './types';
import s from './style.module.scss';

function Login() {
  const { authenticated, requestOtpCode, attemptToLogin } = useContext(AuthContext);
  const [otpCodeRequested, setOtpCodeRequested] = useState(false);
  const handleError = useErrorHandler();

  const handleLogin = async ({ userId, otpCode }: ILoginFormCallback) => {
    const error = await attemptToLogin(userId, otpCode).catch(err => handleError(err));

    if (error) {
      notification.error({ message: error });
      return;
    }
  };

  const handleRequestOtpCode = async (userId: string) => {
    const error = await requestOtpCode(userId).catch(err => handleError(err));

    if (error) {
      notification.error({ message: error });
      return;
    }

    setOtpCodeRequested(true);
  };

  if (authenticated) return <Navigate to="/dashboard" />;

  return (
    <div className={s.container}>
      <div>
        <LoginForm otpCodeRequested={otpCodeRequested} onLogin={handleLogin} onRequestOtpCode={handleRequestOtpCode} />
      </div>
    </div>
  );
}

export default Login;
