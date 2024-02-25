const ManageOrders = async () => {
  const res = await fetch(`http://localhost:5000/api/checkout/fetchallOrders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await res.json();
  return json;
};

export default ManageOrders;
