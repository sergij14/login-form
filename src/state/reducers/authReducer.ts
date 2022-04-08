import { Action, ActionType } from "../actions/types";
import { AuthState } from "./types";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const authReducer = (
  state: AuthState = initialState,
  action: Action
): AuthState => {
  switch (action.type) {
    case ActionType.LOGIN_REQ: {
      return { loading: true, error: null, data: null };
    }

    case ActionType.LOGIN_REQ_SUCCESS: {
      return { loading: false, error: null, data: action.payload };
    }

    case ActionType.LOGIN_REQ_ERROR: {
      return { loading: false, error: action.payload, data: null };
    }

    default: {
      return state;
    }
  }
};
