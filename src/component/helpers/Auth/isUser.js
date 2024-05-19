
const isUser = () => {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};

export default isUser;
