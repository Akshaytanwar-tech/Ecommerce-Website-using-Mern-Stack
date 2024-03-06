// Api to remove all the item to the cart after ordering.
import config from "../../config";
const RemoveAllItems = async () => {
  return await fetch(`${config.APIUrl}/api/Order/removeallItems`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
};

export default RemoveAllItems;
