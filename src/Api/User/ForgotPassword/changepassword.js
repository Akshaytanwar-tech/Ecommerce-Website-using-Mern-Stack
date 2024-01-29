const changepassword = async (OldPassword, NewPassword, ConfirmPassword) => {
  const response = await fetch(
    `http://localhost:5000/api/auth/changepassword`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        password: OldPassword,
        newPassword: NewPassword,
        confirmPassword: ConfirmPassword,
      }),
    }
  );
  const json = await response.json();
  return json;
};

export default changepassword;
