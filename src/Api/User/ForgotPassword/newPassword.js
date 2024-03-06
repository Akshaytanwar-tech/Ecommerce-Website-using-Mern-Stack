import config from "../../../config";
const newPassword = async (newPassword, confirmPassword, id) => {
  const response = await fetch(`${config.APIUrl}/api/auth/newpassword/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    }),
  });
  const json = await response.json();
  return json;
};

export default newPassword;
