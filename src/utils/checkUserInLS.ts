import { isValidUser } from "./isValidUser";

export const checkUserInLS = () => {
  let localStorageData: {email: string, password: string} | null = null;

  if (localStorage.getItem("userData")) {
    localStorageData = JSON.parse(localStorage.getItem("userData") as string);
  }
  
  if (localStorageData && isValidUser(localStorageData.email, localStorageData.password)) {
    return true;
  }
  return false;
};
