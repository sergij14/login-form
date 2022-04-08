import { combineReducers } from "redux";
import { authReducer } from "./authReducer";

const reducers = combineReducers({
  auth: authReducer,
});

// defining the root state type,
// to accurately describe the type of data in the store
export type RootState = ReturnType<typeof reducers>;

export default reducers;
