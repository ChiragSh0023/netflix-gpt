export const signInFormValidation = (name, email, password) => {
  if (name) {
    const isNameValid = /\b([A-Za-zÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    if (!isNameValid) {
      return "Enter a valid name!";
    }
  }

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  if (!isEmailValid) {
    return "Enter a valid email!";
  }

  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
    password
  );
  if (!isPasswordValid) {
    return "Password must include an uppercase letter, a digit, and a special character.";
  }

  return null;
};
