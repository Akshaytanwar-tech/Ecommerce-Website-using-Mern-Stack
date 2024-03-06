import config from "../../config";

const SetDeliverytime = async (id, time) => {
  await fetch(`${config.APIUrl}/api/checkout/delieverytime/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ time: time }),
  });
  return true;
};

export default SetDeliverytime;
