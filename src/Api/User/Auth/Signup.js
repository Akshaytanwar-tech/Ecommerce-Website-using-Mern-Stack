import config from "../../../config";
const Signup = async (username, email, password, photo, address, mobile) => {
  const response = await fetch(`${config.APIUrl}/api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
      photo: photo,
      address: address,
      mobile: mobile,
    }),
  });
  const json = await response.json();
  return json;
};

export default Signup;
