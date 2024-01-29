// To check the entities to forgot password.

const forgotpassword = async (username, email, mobile) => {
  const response = await fetch(
    `http://localhost:5000/api/auth/VerifydetailsForgotPassword`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        mobile: mobile,
      }),
    }
  );
  const json = await response.json();
  return json;
};

export default forgotpassword;
