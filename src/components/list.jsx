import React from "react";
import { Link } from "react-router-dom";

function List(props) {
  return (
    <div>
      <ul className="list-group">
        {props.items.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              <input
                type="checkbox"
                className="m-2"
                checked={item.isCompleted}
                onChange={() => props.onComplete(item.id)}
              />
              {item.text}
            </span>
            <span>
              <Link
                to={"/edit/" + item.id}
                className="btn btn-primary btn-xs m-2"
              >
                Edit
              </Link>
              <Link
                to={"/delete/" + item.id}
                className="btn btn-danger btn-xs m-2"
              >
                Delete
              </Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
