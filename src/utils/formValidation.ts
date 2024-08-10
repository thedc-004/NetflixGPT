function validateForm(
  email: string | null,
  password: string | null,
  name: string | null
) {
  const emailRegEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  if (typeof name == "string" && name.length === 0) return "Enter your name";
  if (email === null) return "Enter your email";
  if (password === null) return "Enter your password";
  if (!emailRegEx.test(email)) return "Email is not valid";
  if (!passwordRegEx.test(password)) return "Enter valid password";
  return null;
}

export default validateForm;
