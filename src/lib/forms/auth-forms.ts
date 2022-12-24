import * as yup from 'yup';

const validatePassword = (val: string | undefined) =>
  !!val && val.toString().length >= 8 && val.toString().length <= 32;

export type SignUpFormType = {
  agreeToTerms: boolean;
  email: string;
  name: string;
  password: string;
};

export type SignInFormType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const signUpFormSchema = yup.object().shape({
  agreeToTerms: yup.bool().oneOf([true]),
  email: yup.string().email().required(),
  name: yup.string().min(5).max(128).required(),
  password: yup
    .string()
    .test('len', 'Must not be empty or 8-32 characters length', validatePassword),
});

export const signInFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .test('len', 'Password must be 8-32 characters length', validatePassword),
  rememberMe: yup.bool(),
});
