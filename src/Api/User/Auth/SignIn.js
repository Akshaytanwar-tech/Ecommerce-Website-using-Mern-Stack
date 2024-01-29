const SignIn = async (email, password) => {
  const response = await fetch(`http://localhost:5000/api/auth/signin`, {
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
