import React, { useState } from "react";

import { useParams } from "react-router-dom";

function Edit(props) {
  let { id } = useParams();
  let item = props.items.find((x) => x.id === Number.parseInt(id));
  let [value, setValue] = useState(item);
  return (
    <div>
      <h1>Edit</h1>
      <div className="card">
        <div className="card-body">
          <form onSubmit={(e) => props.onEdit(e, value)}>
            <div className="form-group">
              <label>Item</label>
              <input
                type="text"
                className="form-control"
                value={value.text}
                onChange={(e) =>
                  setValue({ id: value.id, text: e.target.value })
                }
              />
            </div>
            <button className="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
