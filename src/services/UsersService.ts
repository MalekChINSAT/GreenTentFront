import { firstAPI } from './apis';

export default class UsersService {
  static BASE_ROUTE = '/users';

  static getUsers(signal?: AbortSignal) {
    return firstAPI.get(`${this.BASE_ROUTE}/`, {
      signal,
    });
  }

  static getConnectedUser(signal?: AbortSignal) {
    return firstAPI.get(`${this.BASE_ROUTE}/me`, {
      signal,
    });
  }
}
