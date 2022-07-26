import React, { useState, useEffect } from 'react';
import AuthAPI from '@/api/auth';

interface IAuthContext {
  authenticated: boolean;
  autoLoginFinished: boolean;
  requestOtpCode: (userId: string) => Promise<string | undefined>;
  attemptToLogin: (userId: string, code: string) => Promise<string | undefined>;
  logoutUser: () => Promise<void>;
}

export const AuthContext = React.createContext<IAuthContext>({} as IAuthContext);

const AuthContextProvider = ({ children }: any) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [autoLoginFinished, setAutoLoginFinished] = useState<boolean>(false);

  useEffect(() => {
    autoLoginAttempt();
  }, []);

  const autoLoginAttempt = async () => {
    const { success } = await AuthAPI.checkAccess();

    if (success) setAuthenticated(true);
    setAutoLoginFinished(true);
  };

  const requestOtpCode = async (userId: string) => {
    const { error } = await AuthAPI.requestOtpCode(userId);

    return error;
  };

  const attemptToLogin = async (userId: string, code: string) => {
    const { success, error, data } = await AuthAPI.attemptToLogin(userId, code);

    if (!success) return error;

    localStorage.setItem('userId', data.user_id);
    localStorage.setItem('accessToken', data.access_token);
    window.location.reload();
  };

  const logoutUser = async () => {
    await AuthAPI.logout();

    localStorage.clear();
    window.location.reload();
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        autoLoginFinished,
        requestOtpCode,
        attemptToLogin,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
