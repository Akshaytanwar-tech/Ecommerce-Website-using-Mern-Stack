// Api to remove all the item to the cart after ordering.

const RemoveAllItems = async () => {
  return await fetch(`http://localhost:5000/api/Order/removeallItems`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
};

export default RemoveAllItems;
