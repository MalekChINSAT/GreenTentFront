import type { FC } from 'react';

import { GreenTentLogo } from '@/assets/images';

interface ErrorBoundaryFallbackProps {}

const ErrorBoundaryFallback: FC<ErrorBoundaryFallbackProps> = () => {

  return (
    <div className="flex min-h-full min-h-screen	background-color-body flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-[100px] w-auto"
          src={GreenTentLogo}
          alt="GreenTent"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight color-default">
          UNEXPECTED_ERROR_OCCURED
        </h2>
      </div>
    </div>
  );
};

export default ErrorBoundaryFallback;
