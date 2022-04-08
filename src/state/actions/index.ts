import { Dispatch } from "redux";
import { getErrorMessage } from "../../utils/getErrorMessage";
import { AuthState } from "../reducers/types";
import { Action, ActionType, LoginFormData } from "./types";

const fakeRequest = (data: LoginFormData) => new Promise<AuthState['data']>((resolve, reject) => {
  if (data.email === "frontend@isawesome.com" && data?.password === "cool") {
    resolve({ email: data.email, loggedIn: true });
  } else {
    reject("Incorrect credentials");
  }
})

export const logIn = (data: LoginFormData) => {
  // using Dispatch and providing Action type to have typed dispatch
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN_REQ,
    });
    try {
      const userData = await fakeRequest(data);
      dispatch({
        type: ActionType.LOGIN_REQ_SUCCESS,
        payload: userData,
      });
      const loggedInUserData = {...data, loggedIn: true}
      localStorage.setItem("userData", JSON.stringify(loggedInUserData));
    } catch (error) {
      dispatch({
        type: ActionType.LOGIN_REQ_ERROR,
        payload: getErrorMessage(error),
      });
    }
  };
};
