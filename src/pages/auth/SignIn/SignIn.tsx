import type { FC } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useSignIn } from '@/hooks';
import { signInFormSchema } from '@/lib/forms/auth-forms';
import type { SignInFormType } from '@/lib/forms/auth-forms';
import { setConnectedUser } from '@/store/actions/action-creators';

interface SignInProps { }

const SignIn: FC<SignInProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'all',
    resolver: yupResolver(signInFormSchema),
  });
  const navigate = useNavigate();
  const { mutate } = useSignIn();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<SignInFormType> = (data) => {
    mutate(data, {
      onError: () => toast.error('Error occured!'),
      onSuccess: (res) => {
        console.log('userLoggedIn', res.data.user)
        toast.success("You're connected now!");
        localStorage.setItem('access-token', res.data.accessToken);
        //dispatch(setConnectedUser(res.data.user));
        navigate('/');
        reset();
      },
    });
  };

  // SET CUSTOM ERROR MSGS BY CHECKING errors.<field-name>.type (required, maxLength, ..)

  return (
    <div className="flex flex-col justify-center " style={{ backgroundColor: "#EBE9DF", paddingTop:"5px" }}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h4 className="mt-2 text-4xl text-center tracking-tight text-[#043e53] font-bold" style={{ marginTop: 0 }}>
          Welcome Back!
        </h4>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-6 px-4 box-shadow sm:rounded-lg sm:px-4 rounded-md border border-[#043e53]  bg-white">

          <form
            className="space-y-4"
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            style={{ marginRight: "20px", marginLeft: "20px" }}
          >
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4  rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                  {...register('rememberMe')}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-[#043e53] py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1E293B]focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
            <div className="flex items-center justify-center space-x-2 my-5">
              <span className="h-px w-48 bg-gray-300"></span>
              <span className="text-gray-400 font-normal">or</span>
              <span className="h-px w-48 bg-gray-300"></span>
            </div>
            <div className="mb-3">
              <button className="text-sm font-medium flex flex-wrap justify-center text-[#043e53] w-full border border-[#043e53] hover:border-gray-500 px-2 py-1.5 rounded-md">
                <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" />
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
      <Link
        key={"signup"}
        to={'/auth/sign-up'}
        className="underline mt-2 text-center tracking-tight text-[#D56D2E] text-sm font-medium hover:text-[#1E293B]"
      >
        Don't have an account? Sign up.
      </Link>
    </div>
  );
};

export default SignIn;
