// Api to create an order

const HandleCheckout = async (
  name,
  address,
  Mobile,
  AlternateMobile,
  PINcode,
  id,
  productName,
  productPhoto,
  productPrice,
  mode
) => {
  // Save name, address, mobile no etc in db
  await fetch(`http://localhost:5000/api/checkout/Order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      productID: id,
      name: name,
      address: address,
      Mobile: Mobile,
      AlternateMobile: AlternateMobile,
      PINcode: PINcode,
      productName: productName,
      productPhoto: productPhoto,
      productPrice: productPrice,
      PaymentMode: mode,
    }),
  });
};

export default HandleCheckout;
