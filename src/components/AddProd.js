import React, { useState } from "react";

function AddProd(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addProd(name, Number(price));
        }}
      >
        <div className="row">
          <div className="col-5">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                style={{ width: "80%" }}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 col-5">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Price
            </label>
            <input
              type="number"
              style={{ width: "80%" }}
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-4 col-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProd;
