const SetDeliverytime = async (id, time) => {
  await fetch(`http://localhost:5000/api/checkout/delieverytime/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ time: time }),
  });
  return true;
};

export default SetDeliverytime;
