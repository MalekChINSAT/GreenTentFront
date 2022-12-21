import type { FC } from 'react';

import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks';

interface AuthGuardProps {
  children: JSX.Element | JSX.Element[];
}

const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  const connectedUser = useAppSelector((store) => store.global.connectedUser);

  return connectedUser ? (
    <>{children}</>
  ) : (
    <Navigate to="/auth/sign-in" replace />
  );
};

export default AuthGuard;
