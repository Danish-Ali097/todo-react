import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Delete(props) {
  let { id } = useParams();
  return (
    <div className="card">
      <div className="card-body">
        <h5>Delete</h5>
        <p>Are u Sure?</p>
        <button
          className="btn btn-primary m-2"
          onClick={() => props.onDelete(id)}
        >
          Yes
        </button>
        <Link to={"/"} className="btn btn-danger">
          No
        </Link>
      </div>
    </div>
  );
}

export default Delete;
