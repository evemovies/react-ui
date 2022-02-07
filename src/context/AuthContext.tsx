import React, { useState, useEffect } from 'react';

interface IAuthContext {
  authenticated: boolean;
  autoLoginFinished: boolean;
  requestOtpCode: () => Promise<number>;
}

export const AuthContext = React.createContext<IAuthContext>({} as IAuthContext);

const pause = () => new Promise((resolve) => setTimeout(resolve, 3000));

const AuthContextProvider = ({ children }: any) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [autoLoginFinished, setAutoLoginFinished] = useState<boolean>(false);

  async function autoLoginAttempt() {
    console.log('autologin attempt');
    await pause();
    console.log('autologin done');

    setAuthenticated(false);
    setAutoLoginFinished(true);
  }

  async function requestOtpCode() {
    console.log('requesting otp code');
    await pause();
    console.log('otp code requested');

    return 1234;
  }

  useEffect(() => {
    autoLoginAttempt();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        autoLoginFinished,
        requestOtpCode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
