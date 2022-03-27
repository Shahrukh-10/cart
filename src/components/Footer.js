import React from "react";

function Footer(props) {
  return (
    <div
      className="container-fluid mt-5"
      style={{ position: "fixed", bottom: "0px" }}
    >
      <div className="row">
        <button
          className="btn btn-danger col-2"
          onClick={() => {
            props.reset();
          }}
        >
          Reset
        </button>
        <div
          className="col-8"
          style={{
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
          }}
        >
          {props.total > 0 ? props.total : "Add products ."}
        </div>
        <button className="btn btn-success col-2">Pay</button>
      </div>
    </div>
  );
}

export default Footer;
