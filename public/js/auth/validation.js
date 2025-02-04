export const isValidUsername = (username) => {
  let isValid;

  isValid = username.length >= 5;

  return isValid;
};

export const isValidPassword = (password) => {
  let isValid;

  const regexpLength = /[a-zA-Z0-9]{8,}/g;
  const regexpUpper = /[A-Z]/g;
  const regexpNumber = /[0-9]/g;

  const passwordLength = regexpLength.test(password);
  const passwordUpper = regexpUpper.test(password);
  const passwordNumber = regexpNumber.test(password);

  isValid = passwordLength && passwordNumber && passwordUpper;

  return isValid;
};

export const isSamePassword = (password1, password2) => {
  let isSame;

  isSame = password1 === password2;

  return isSame;
};

export const isAdultAge = (age) => {
  let isAdult;

  isAdult = Number(age) >= 18;

  return isAdult;
};
