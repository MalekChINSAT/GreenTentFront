import type { FC } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { signUpFormSchema } from '@/lib/forms/auth-forms';
import type { SignUpFormType } from '@/lib/forms/auth-forms';
import { useSignUp } from '@/hooks';

interface SignUpProps { }

const SignUp: FC<SignUpProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      agreeToTerms: false,
      email: '',
      name: '',
      password: '',
    },
    mode: 'all',
    resolver: yupResolver(signUpFormSchema),
  });
  const navigate = useNavigate();
  const { mutate } = useSignUp();

  const onSubmit: SubmitHandler<SignUpFormType> = (data) => {
    mutate(data, {
      onError: () => toast.error('Error occured!'),
      onSuccess: res => {
        toast.success("Your account is successfully created!");
        navigate('/auth/sign-in');
        reset();
      },
    });
  };

  return (
    <div className="flex flex-col justify-center py-10 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h4 className="mt-2 text-xl text-center font-bold tracking-tight text-[#043e53]" style={{ marginTop: 0 }}>
          Create your account with us!
        </h4>
      </div>
      <Link
        key={"signin"}
        to={'/auth/sign-in'}
        className="underline t-2 text-center tracking-tight text-[#D56D2E] text-sm  hover:text-[#1E293B]"
      >
        Already a member? Login.
      </Link>
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-6 px-4 shadow sm:rounded-lg sm:px-10 rounded-md border border-[#043e53]">
          <form
            className="space-y-4"
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  type="text"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"
                  {...register('name')}
                />
              </div>
              {errors.name && (
                <p className="first-letter:uppercase mt-1 text-red-500 text-sm italic">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="text"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"
                  {...register('email')}
                />
              </div>
              {errors.email && (
                <p className="first-letter:uppercase mt-1 text-red-500 text-sm italic">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  autoComplete="off"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"
                  {...register('password')}
                />
              </div>
              {errors.password && (
                <p className="first-letter:uppercase mt-1 text-red-500 text-sm italic">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="agree-to-terms"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                  {...register('agreeToTerms')}
                />
                <label
                  htmlFor="agree-to-terms"
                  className="ml-2 block text-sm text-gray-900"
                >
                  {"I have read and agree to the terms of service"}
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-[#043e53] py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1E293B]focus:ring-offset-2"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;


