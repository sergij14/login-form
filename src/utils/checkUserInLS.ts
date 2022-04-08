export const checkUserInLS = () => {
  let localStorageData = null;

  if (localStorage.getItem("userData")) {
    localStorageData = JSON.parse(localStorage.getItem("userData") as string);
  }
  
  if (localStorageData && localStorageData.loggedIn) {
    return true;
  }
  return false;
};
