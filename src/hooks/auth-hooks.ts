import { useMutation } from '@tanstack/react-query';

import { AuthService } from '@/services';

import type { SignInFormType, SignUpFormType } from '../lib/forms/auth-forms';

export const useSignIn = () => {
  return useMutation({
    mutationFn: (data: SignInFormType) => {
      return AuthService.signIn(data);
    },
  });
};

export const useSignUp = () => {
  return useMutation({
    mutationFn: (data: SignUpFormType) => {
      return AuthService.signUp(data);
    },
  });
};
