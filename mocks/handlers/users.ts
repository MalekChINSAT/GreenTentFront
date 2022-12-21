import { faker } from '@faker-js/faker';
import { rest } from 'msw';

const BASE_URL = '/api/users';

export default [
  rest.get(`${BASE_URL}/`, async (_req, res, ctx) => {
    const users = Array.from({ length: 25 }, () => ({
      email: faker.internet.email(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    }));

    await new Promise((resolve) => setTimeout(() => resolve(null), 3000));

    return res(ctx.status(200), ctx.json(users));
  }),

  rest.get(`${BASE_URL}/me`, (_req, res, ctx) => {
    const user = {
      email: faker.internet.email(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    };

    return res(ctx.status(200), ctx.json(user));
  }),
];
