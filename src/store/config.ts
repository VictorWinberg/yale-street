/**
 * Structure of the "State" in the AppStore
 */
export interface AppStoreState {
  opened: boolean;
  isAuthenticated: boolean;
  currentUser?: unknown | undefined;
}

/**
 * Initial values of the "State" in the AppStore
 */
export const INITIAL_APP_STORE_STATE: AppStoreState = {
  opened: true,
  isAuthenticated: false // Overridden in AppStore by checking auth token
};
