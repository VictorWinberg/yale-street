import * as actions from './actions';
import { AppStoreState } from './config';

export type AppStoreAction = {
  type: string;
  payload?: unknown;
};

/**
 * Reducer for global AppStore using "Redux styled" actions
 * @param {object} state - current/default state
 * @param {string} action.type - unique name of the action
 * @param {*} [action.payload] - optional data object or the function to get data object
 */
const AppStoreReducer: React.Reducer<AppStoreState, AppStoreAction> = (state, action) => {
  console.log('AppReducer() - action:', action);
  switch (action.type) {
    case actions.CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case actions.SIGN_UP:
    case actions.LOG_IN:
      return {
        ...state,
        isAuthenticated: true
      };
    case actions.LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
        currentUser: undefined // Also reset previous user data
      };
    case actions.SET_MENU: {
      return {
        ...state,
        opened: action.payload as boolean
      };
    }
    default:
      return state;
  }
};

export default AppStoreReducer;
