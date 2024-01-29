// Api to handle the quantity of the product in cart

const HandleQty = async (id, quantity) => {
  return await fetch(`http://localhost:5000/api/Order/quantity/${id}`, {
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
