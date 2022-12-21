import type { FC } from 'react';

import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks';

interface PublicGuardProps {
  children: JSX.Element | JSX.Element[];
}

const PublicGuard: FC<PublicGuardProps> = ({ children }) => {
  const connectedUser = useAppSelector((store) => store.global.connectedUser);

  return !connectedUser ? (
    <>{children}</>
  ) : (
    <Navigate to="/" replace />
  );
};

export default PublicGuard;
