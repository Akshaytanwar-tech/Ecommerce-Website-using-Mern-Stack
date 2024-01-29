// Api to add item to the cart

const AddItemCart = async (id) => {
  return await fetch(`http://localhost:5000/api/Order/AddCart`, {
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
