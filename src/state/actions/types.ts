import { AuthState } from "../reducers/types";

interface LoginAction {
  type: ActionType.LOGIN_REQ;
}

interface LoginSuccessAction {
  type: ActionType.LOGIN_REQ_SUCCESS;
  payload: AuthState["data"];
}

interface LoginErrorAction {
  type: ActionType.LOGIN_REQ_ERROR;
  payload: AuthState["error"];
}

export type Action =
  | LoginAction
  | LoginErrorAction
  | LoginSuccessAction;

export enum ActionType {
  LOGIN_REQ = "LOGIN_REQ",
  LOGIN_REQ_SUCCESS = "LOGIN_REQ_SUCCESS",
  LOGIN_REQ_ERROR = "LOGIN_REQ_ERROR",
  RESET_STATE = "RESET_STATE",
}
