import config from "../../../config";
const changepassword = async (OldPassword, NewPassword, ConfirmPassword) => {
  const response = await fetch(`${config.APIUrl}/api/auth/changepassword`, {
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
  });
  const json = await response.json();
  return json;
};

export default changepassword;
