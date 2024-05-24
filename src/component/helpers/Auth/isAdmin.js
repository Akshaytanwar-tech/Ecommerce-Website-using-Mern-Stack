import config from "../../../config";
let isadmin = false;
const fetchuser = async () => {
  const response = await fetch(`${config.APIUrl}/api/auth/fetchuser`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  const json = await response.json();
  if (json.role === 1) {
    isadmin = true;
  }
};
const isAdmin = () => {
  if (!localStorage.getItem("token")) {
    return false;
  }
  fetchuser();
  if (isadmin) {
    return true;
  }
  return false;
};

export default isAdmin;
