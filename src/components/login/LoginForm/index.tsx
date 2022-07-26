// import { useEffect } from 'react';
// import { useErrorHandler } from 'react-error-boundary';
// import s from './styles.module.scss';
//
// const pause = () => new Promise(resolve => setTimeout(resolve, 3000));
//
// function LoginForm() {
//   const handleError = useErrorHandler();
//
//   useEffect(() => {
//     pause().then(() => {
//       console.log('done');
//     });
//   }, []);
//   // pause().then(() => {
//   //   console.log('done');
//   // });
//
//   // useEffect(() => {
//   //   // setTimeout(() => {
//   //   //   try {
//   //   //     throw new Error('hello');
//   //   //   } catch (error) {
//   //   //     handleError(error);
//   //   //   }
//   //   // }, 3000);
//   // });
//
//   return (
//     <div>
//       <h1 className={s.title}>Login form goes here</h1>
//     </div>
//   );
// }
//
// export default LoginForm;
import React, { useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { ILoginFormProps } from './types';
import s from './styles.module.scss';

function LoginForm({ onSubmit }: ILoginFormProps) {
  const [userId, setUserId] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const handleError = useErrorHandler();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({ userId, otpCode });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={userId} placeholder="User ID" onChange={e => setUserId(e.target.value)} />
        <input value={otpCode} placeholder="OTP Code" onChange={e => setOtpCode(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
