import { React } from "react";

const ProductDescription = (props) => {
  return (
    <>
      <h1 className="text-center my-4">Explore more about the Product</h1>
      <div className="container px-4 border py-3">
        <div className="row gx-5">
          <div className="col">
            <div className="border" style={{ height: "250px" }}>
              <div className="h4 my-3 text-center">Product Highlights</div>
              <div
                className="list-group list-group-flush overflow-auto"
                style={{ maxHeight: "190px" }}
              >
                {props.product.ProductHighlight &&
                  props.product.ProductHighlight.map((e, index) => {
                    return (
                      <li key={index} className="list-group-item px-3 py-2">
                        • {e}
                      </li>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="border" style={{ height: "250px" }}>
              <div className="h4 my-3 text-center">Description</div>
              <p
                className="px-3 overflow-auto p-2"
                style={{ maxHeight: "190px" }}
              >
                {props.product.Description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center my-4">Product Description</h1>
      <div className="container overflow-auto border py-3" style={{ height: "450px" }}>
        {props.product.Description_spec &&
          props.product.Description_spec.map((e, index) => {
            return index % 2 === 0 ? (
              <div className="card mb-3 mx-4" style={{ maxHeight: "205px" }}>
                <div className="row g-0">
                  <div className="col-md-2">
                    <img
                      src={e.Description_spec_photo}
                      className="img-fluid rounded-start p-4"
                      style={{ maxHeight: "200px", maxWidth: "200px" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">{e.Description_spec_title}</h5>
                      <p
                        className="card-text overflow-auto "
                        style={{ maxHeight: "130px" }}
                      >
                        {e.Description_spec_desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card mb-3 mx-4" style={{ maxHeight: "205px" }}>
                <div className="row g-0">
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">{e.Description_spec_title}</h5>
                      <p
                        className="card-text overflow-auto "
                        style={{ maxHeight: "130px" }}
                      >
                        {e.Description_spec_desc}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <img
                      src={e.Description_spec_photo}
                      className="img-fluid rounded-start p-4"
                      style={{ maxHeight: "200px", maxWidth: "200px" }}
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ProductDescription;
