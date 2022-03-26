import Api, { IAPIResponse } from './api';

const authApi = {
  async requestOtpCode(userId: string): Promise<IAPIResponse> {
    const data = await Api.post('/api/v1/auth/request-otp-code', {
      _id: userId,
    });

    return data.data;
  },

  async attemptToLogin(userId: string, code: string): Promise<IAPIResponse> {
    const data = await Api.post('/api/v1/auth/login', {
      _id: userId,
      OTPCode: code,
    });

    return data.data;
  },

  async checkAccess(): Promise<IAPIResponse> {
    const data = await Api.get('/api/v1/auth/access');

    return data.data;
  },

  async logout(): Promise<void> {
    await Api.post('/api/v1/auth/logout');
  },
};

export default authApi;
