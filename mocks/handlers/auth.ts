import { faker } from '@faker-js/faker';
import { rest } from 'msw';

const BASE_URL = '/auth';

export default [
  rest.post(`${BASE_URL}/signup`, (_req, res, ctx) => {
    const data = {
      accessToken: '12345678',
      user: {
        email: faker.internet.email(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      },
    };

    return res(ctx.status(200), ctx.json(data));
  }),

  rest.post(`${BASE_URL}/sign-in`, async (req, res, ctx) => {
    // const body = await req.json();
    const data = {
      accessToken: '12345678',
      user: {
        email: faker.internet.email(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      },
    };

    return res(ctx.status(200), ctx.json(data));
  }),
];
