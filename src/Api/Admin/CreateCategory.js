// Api to create a category in admin panel

const CreateCategory = async (name, photo) => {
  let response = await fetch(`http://localhost:5000/api/Category/category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, photo: photo }),
  });
  const json = await response.json();
  return json;
};

export default CreateCategory;
