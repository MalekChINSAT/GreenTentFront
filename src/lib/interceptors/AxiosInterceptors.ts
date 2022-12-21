import { v4 as uuidv4 } from 'uuid';

const appVersion = import.meta.env.VITE_APP_RELEASE_VERSION;

const apiRequestMiddleware = (config: any) => {
  const accessToken = localStorage.getItem('access-token');

  if (config.headers) {
    if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;
    config.headers['x-b3-traceId'] = uuidv4();
    config.headers['x-app-version'] = appVersion;
    config.headers['x-product-name'] = 'DESKTOP';
  }

  return config;
};

const apiResponseMiddleware = async (err: any, axiosAPI: any) => {
  const originalConfig = err.config;

  if (
    !originalConfig.url.endsWith('/auth/refresh') &&
    err.response &&
    err.response.status === 401 &&
    err.response.data.message === 'Revoked, expired or invalid token' &&
    !originalConfig._retry
  ) {
    try {
      // TODO: REFRESH TOKENS
      // TODO: SAVE TOKENS
      // TODO: ADD Authorization HEADER TO config AND RETRY REQUEST
      return axiosAPI(originalConfig);
    } catch (err2) {
      return Promise.reject(err2);
    }
  }

  return Promise.reject(err);
};

export { apiRequestMiddleware, apiResponseMiddleware };
