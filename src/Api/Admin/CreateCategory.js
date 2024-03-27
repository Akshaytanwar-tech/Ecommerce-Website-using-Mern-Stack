// Api to create a category in admin panel
import config from "../../config";

const CreateCategory = async (formData) => {
  let response = await fetch(`${config.APIUrl}/api/Category/category`, {
    method: "POST",
    body: formData,

    // body: JSON.stringify({ name: name, photo: photo }),
  });
  const json = await response.json();
  return json;
};

export default CreateCategory;
