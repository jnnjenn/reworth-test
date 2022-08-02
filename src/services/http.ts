import axios from 'axios';
import to from 'await-to-js';

const http = axios.create({ baseURL: 'https://api.reworth.app/dev' });

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // tslint:disable-next-line:no-console
    console.error(error);
    return Promise.reject(error);
  },
);

export const getDirectories = async () => {
  const [error, response] = await to(http.get(`/directory`));
  if (error) {
    throw error;
  }
  return response;
};

export default http;
