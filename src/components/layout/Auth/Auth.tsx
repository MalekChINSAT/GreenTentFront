import type { FC } from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '@/components/navbar';

interface AuthProps { }

const Auth: FC<AuthProps> = () => {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="py-4 bg-[#EBE9DF] min-h-screen">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <Outlet />
          </div>
        </div>
      </main>
    </>)

};

export default Auth;
