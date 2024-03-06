// Api to handle the quantity of the product in cart
import config from "../../config";
const HandleQty = async (id, quantity) => {
  return await fetch(`${config.APIUrl}/api/Order/quantity/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Quantity: quantity,
    }),
  });
};

export default HandleQty;
