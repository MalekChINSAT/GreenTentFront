import type { FC } from 'react';

import { GreenTentLogo } from '@/assets/images';

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => {
  
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8" style={{ backgroundColor: "#fbfdfb" }}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-[100px] w-auto"
          src={GreenTentLogo}
          alt="GreenTent"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          PAGE_NOT_FOUND
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
