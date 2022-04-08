export interface AuthState {
  loading: boolean;
  error: string | null;
  data: {
    email: string,
    loggedIn: boolean
  } | null;
}
