import config from "../../config";

const ConfirmOrder = async (id) => {
  await fetch(`${config.APIUrl}/api/checkout/confirmOrder/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default ConfirmOrder;
