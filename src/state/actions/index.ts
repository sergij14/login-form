import { Dispatch } from "redux";
import { getErrorMessage } from "../../utils/getErrorMessage";
import { isValidUser } from "../../utils/isValidUser";
import { AuthState } from "../reducers/types";
import { Action, ActionType, LoginFormData } from "./types";

const fakeRequest = (data: LoginFormData) => new Promise<AuthState['data']>((resolve, reject) => {
  if (isValidUser(data.email,data.password)) {
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

      localStorage.setItem("userData", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: ActionType.LOGIN_REQ_ERROR,
        payload: getErrorMessage(error),
      });
    }
  };
};
