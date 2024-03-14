export const checkValidData = (isSignInForm, email, password, name) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isSignInForm && !name) return "Enter Name to proceed!";

  if (!isEmailValid) return "Email is not valid";

  if (!isPasswordValid) return "Password is not valid";

  return null;
};
