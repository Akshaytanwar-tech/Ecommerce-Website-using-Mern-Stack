const ConfirmOrder = async (id) => {
  await fetch(`http://localhost:5000/api/checkout/confirmOrder/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default ConfirmOrder;
