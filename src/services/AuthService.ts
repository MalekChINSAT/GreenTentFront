import type { SignInFormType, SignUpFormType } from '@/lib/forms/auth-forms';

import { firstAPI } from './apis';

export default class AuthService {
  static BASE_ROUTE = '/auth';

  static signIn(data: SignInFormType, signal?: AbortSignal) {
    return firstAPI.post(`${this.BASE_ROUTE}/login`, data, {
      signal,
    });
  }

  static signUp(data: SignUpFormType, signal?: AbortSignal) {
    return firstAPI.post(`${this.BASE_ROUTE}/signup`, data, {
      signal,
    });
  }
}
