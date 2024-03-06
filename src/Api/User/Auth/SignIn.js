import config from "../../../config";
const SignIn = async (email, password) => {
  const response = await fetch(`${config.APIUrl}/api/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const json = await response.json();
  return json;
};

export default SignIn;
