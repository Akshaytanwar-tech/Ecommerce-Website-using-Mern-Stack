// Api to edit the profile
import config from "../../config";
const changeProfile = async (username, email, mobile, address) => {
  await fetch(`${config.APIUrl}/api/auth/editprofile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      username: username,
      email: email,
      address: address,
      mobile: mobile,
    }),
  });
};

export default changeProfile;
