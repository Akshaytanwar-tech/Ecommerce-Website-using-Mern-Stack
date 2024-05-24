import config from "../../../config";
const Signup = async (formData) => {
  const response = await fetch(`${config.APIUrl}/api/auth/signup`, {
    method: "POST",
    body: formData,
  });
  const json = await response.json();
  return json;
};

export default Signup;
