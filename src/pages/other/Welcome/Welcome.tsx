import type { FC } from 'react';

import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@/hooks';

interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = () => {
  const connectedUser = useAppSelector((store) => store.global.connectedUser);

  return connectedUser ? (
    <Navigate to="/" replace />
  ) : (
    <Navigate to="/auth/sign-in" replace />
  );
};

export default Welcome;
