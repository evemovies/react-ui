import { ILoginFormCallback } from '../../types';

export interface ILoginFormProps {
  otpCodeRequested: boolean;
  onLogin: (loginData: ILoginFormCallback) => void;
  onRequestOtpCode: (userId: string) => void;
}
