import type { FC } from 'react';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from './hooks';
import Preload from './pages/other/Preload';
import Router from './router';
import { UsersService } from './services';
import {
  setConnectedUser,
  setIsPreloadState,
} from './store/actions/action-creators';

const App: FC = () => {
  const isPreloadState = useAppSelector((store) => store.global.isPreloadState);
  const isConnected = useAppSelector((store) => store.global.connectedUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem('access-token');
    //setTimeout(() => {
      //user is not logged in
      if (!accessToken) {
        dispatch(setIsPreloadState(false));
        return;
      }
      //user is logged in 
      if (!isConnected){

        UsersService.getConnectedUser()
        .then((res) => {
          console.log('userConnected', res.data)
          dispatch(setConnectedUser(res.data));
          dispatch(setIsPreloadState(false));
        })
        .catch(() => {
          dispatch(setIsPreloadState(false));
        });
        
      }

    //}, 1000);
  }, [dispatch, isConnected]);

  if (isPreloadState) return <Preload />;

  return (
    <div>
      <Router />
    </div>
  );
};

export default App;
