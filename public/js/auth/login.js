export const checkCredentials = (username, password) => {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  let areValidCredentials;

  const usernameValid = username === storedUsername;
  const passwordValid = password === storedPassword;

  areValidCredentials = usernameValid && passwordValid;

  return areValidCredentials;
};
