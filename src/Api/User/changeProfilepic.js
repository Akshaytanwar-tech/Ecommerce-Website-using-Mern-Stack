import config from "../../config";

const changeProfilepic = async (photo) => {
  await fetch(`${config.APIUrl}/api/auth/changeProfile`, {
    method: "PUT",
    headers: {
      token: localStorage.getItem("token"),
    },
    body: photo,
  });
};

export default changeProfilepic;
