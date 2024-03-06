// Api to add item to the cart
import config from "../../config";
const AddItemCart = async (id) => {
  return await fetch(`${config.APIUrl}/api/Order/AddCart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      id: id,
    }),
  });
};

export default AddItemCart;
