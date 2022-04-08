export interface AuthState {
  loading: boolean;
  error: string | null;
  data: {
    username: string,
    loggedIn: boolean
  } | null;
}
