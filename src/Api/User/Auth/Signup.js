import config from "../../../config";
const Signup = async (formData) => {
  const response = await fetch(`http://localhost:5000/api/auth/signup`, {
    method: "POST",
    body: formData,
  });
  const json = await response.json();
  return json;
};

export default Signup;
