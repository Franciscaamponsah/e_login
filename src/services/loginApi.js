import defaultCredentials from "../Data";

const loginApi = (username, password, loginAs) => {
  if (
    defaultCredentials[0].accountType === loginAs &&
    defaultCredentials[0].username === username &&
    defaultCredentials[0].password === password
  ) {
    return true;
  }
  if (
    defaultCredentials[1].accountType === loginAs &&
    defaultCredentials[1].username === username &&
    defaultCredentials[1].password === password
  ) {
    return true;
  }
  return false;
};

export default loginApi;
