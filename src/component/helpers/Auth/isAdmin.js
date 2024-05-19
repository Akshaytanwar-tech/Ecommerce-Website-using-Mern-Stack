import config from "../../../config";
const fetchuser = async () => {
  const response = await fetch(`${config.APIUrl}/api/auth/fetchuser`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  const json = await response.json();
  return json.role;
};
const isAdmin = () => {
  if (!localStorage.getItem("token")) {
    return false;
  }
  const result = fetchuser();
  if (result === 1) {
    return true;
  }
  return false;
};

export default isAdmin;
