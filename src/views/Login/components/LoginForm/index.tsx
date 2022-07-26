import React, { useState } from 'react';
import { ILoginFormProps } from './types';
import s from './styles.module.scss';

function LoginForm({ otpCodeRequested, onLogin, onRequestOtpCode }: ILoginFormProps) {
  const [userId, setUserId] = useState('');
  const [otpCode, setOtpCode] = useState('');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (otpCodeRequested) onLogin({ userId, otpCode });
    else onRequestOtpCode(userId);
  };

  const requestOtpCode = () => {
    onRequestOtpCode(userId);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={userId} placeholder="User ID" onChange={e => setUserId(e.target.value)} />
        <input value={otpCode} placeholder="OTP Code" onChange={e => setOtpCode(e.target.value)} />
        <button type="submit" onClick={requestOtpCode}>
          Request
        </button>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
