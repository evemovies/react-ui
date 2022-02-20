import Api, { IAPIResponse } from './api';

const userApi = {
  async getUser(userId: string): Promise<IAPIResponse> {
    const data = await Api.get('/api/v1/users/' + userId);

    return data.data;
  },
};

export default userApi;
