import React from "react";
import { useParams } from "react-router-dom";

function Delete(params) {
  let { id } = useParams();
  console.log(id);
  return (
    <div className="card">
      <div className="card-body">
        <h5>Delete</h5>
        <p>Are u Sure?</p>
        <button className="btn btn-primary m-2">Yes</button>
        <button className="btn btn-danger">No</button>
      </div>
    </div>
  );
}

export default Delete;
