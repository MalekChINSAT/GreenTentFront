import _ from './action-types';

const getActionCreator = (actionType: string) => (payload: any) => ({
  payload,
  type: actionType,
});

export const setTestValue = getActionCreator(_.SET_TEST_VALUE);
export const setRandomNb = getActionCreator(_.SET_RANDOM_NB);
export const setConnectedUser = getActionCreator(_.SET_CONNECTED_USER);
export const setIsPreloadState = getActionCreator(_.SET_IS_PRELOAD_STATE);
