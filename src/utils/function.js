export const checkEmail = (email) => {
  const regex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  return regex.test(email);
};

export const checkPassword = (password) => {
  const regex = /^.{8,}$/;
  return regex.test(password);
};

export const extractionUsername = (email) => {
  return email.replace(email.substring(email.indexOf("@")), "");
};
