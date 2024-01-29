const newPassword = async (newPassword, confirmPassword, id) => {
  const response = await fetch(
    `http://localhost:5000/api/auth/newpassword/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newPassword: newPassword,
        confirmPassword: confirmPassword,
      }),
    }
  );
  const json = await response.json();
  return json;
};

export default newPassword;
