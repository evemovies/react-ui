import axios from 'axios';

export interface IAPIResponse {
  success: boolean;
  data: any;
  error?: string;
}

const instance = axios.create({
  baseURL: '/',
});

const accessToken = localStorage.getItem('accessToken');

instance.defaults.headers.common['Content-Type'] = 'application/json';
if (accessToken) instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

instance.interceptors.response.use(
  response => response,
  error => {
    return {
      data: {
        success: false,
        data: {},
        error: error.response.data.error || 'Unknown error',
      },
    };
  }
);

export default instance;
