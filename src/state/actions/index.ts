import { Dispatch } from "redux";
import { getErrorMessage } from "../../utils/getErrorMessage";
import { Action, ActionType } from "./types";

export const logIn = (data: { email: string; password: string }) => {
  // using Dispatch and providing Action type to have typed dispatch
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN_REQ,
    });
    if (
      data.email === "frontend@isawesome.com" &&
      data.password === "cool"
    ) {
      dispatch({
        type: ActionType.LOGIN_REQ_SUCCESS,
        payload: { email: data.email, loggedIn: true },
      });
    }
    dispatch({
      type: ActionType.LOGIN_REQ_ERROR,
      payload: getErrorMessage("Incorrect credentials"),
    });
  };
};