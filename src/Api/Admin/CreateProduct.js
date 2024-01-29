const CreateProduct = async (
  Brand_Name,
  Product_Name,
  Product_Name_Details,
  Description,
  photo,
  price,
  quantity,
  CategoryID,
  tags,
  Description_spec,
  ProductHighlight,
  isBestProduct
) => {
  const response = await fetch(
    `http://localhost:5000/api/Product/Productcreate`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Brand_Name: Brand_Name,
        Product_Name: Product_Name,
        Product_Name_Details: Product_Name_Details,
        Description: Description,
        photo: photo,
        price: price,
        quantity: quantity,
        CategoryID: CategoryID,
        tags: tags,
        Description_spec: Description_spec,
        ProductHighlight: ProductHighlight,
        isBest: isBestProduct,
      }),
    }
  );

  const json = response.json();
  return json;
};

export default CreateProduct;
