import config from "../../config";

const ManageOrders = async () => {
  const res = await fetch(`${config.APIUrl}/api/checkout/fetchallOrders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await res.json();
  return json;
};

export default ManageOrders;
