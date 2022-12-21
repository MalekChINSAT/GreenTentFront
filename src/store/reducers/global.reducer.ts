import _ from '../actions/action-types';
import { getRandomNb } from './../../utils/funcs';

interface IState {
  connectedUser: null | { name: string; email: string };
  isPreloadState: boolean;
  randomNb: number;
  testValue: string;
}

const initialState: IState = {
  connectedUser: null,
  isPreloadState: true,
  randomNb: getRandomNb(),
  testValue: 'GreenTent',
};

interface IAction {
  type: string;
  payload: any;
}

const globalReducer = (state: IState = initialState, action: IAction) => {
  const { type, payload } = action;

  switch (type) {
    case _.SET_IS_PRELOAD_STATE:
      return { ...state, isPreloadState: payload };

    case _.SET_CONNECTED_USER:
      return { ...state, connectedUser: payload };

    case _.SET_TEST_VALUE:
      return { ...state, testValue: payload };

    case _.SET_RANDOM_NB:
      return { ...state, randomNb: payload };

    default:
      return state;
  }
};

export default globalReducer;
