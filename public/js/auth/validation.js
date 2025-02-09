export const isValidUsername = (username) => {
  let isValid;

  const minimumUsernameLength = 5;
  isValid = username.length >= minimumUsernameLength;

  return isValid;
};

export const isValidPassword = (password) => {
  let isValid;

  const upperCaseRegEx = /[A-ZÀ-Ú]/g;
  const numberRegEx = /[0-9]/g;

  const minimumPasswordLength = 8;
  const hasPasswordLength = password.length >= minimumPasswordLength;
  const hasPasswordUpperCase = upperCaseRegEx.test(password);
  const hasPasswordNumber = numberRegEx.test(password);

  isValid = hasPasswordLength && hasPasswordNumber && hasPasswordUpperCase;

  return isValid;
};

export const isSamePassword = (password1, password2) => {
  let isSame;

  isSame = password1 === password2;

  return isSame;
};

export const isAdultAge = (age) => {
  let isAdult;

  const minimumAdultAge = 18;
  isAdult = age >= minimumAdultAge;

  return isAdult;
};
