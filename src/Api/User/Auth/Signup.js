import config from "../../../config";
const Signup = async (formdata) => {
  const response = await fetch(`${config.APIUrl}/api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: formdata,
  });
  const json = await response.json();
  return json;
};

export default Signup;
