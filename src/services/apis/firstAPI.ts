import axios from 'axios';

import {
  apiRequestMiddleware,
  apiResponseMiddleware,
} from '@/lib/interceptors';

const serverURL = window.ENV[process.env.NODE_ENV || 'development'].server_url;

const firstAPI = axios.create({
  baseURL: serverURL,
});

firstAPI.interceptors.request.use(apiRequestMiddleware, (error) =>
  Promise.reject(error)
);

firstAPI.interceptors.response.use(
  (res) => res,
  (error) => apiResponseMiddleware(error, firstAPI)
);

export default firstAPI;
