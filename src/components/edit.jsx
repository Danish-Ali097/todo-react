import React from "react";

import { useParams } from "react-router-dom";

function Edit(params) {
  let { id } = useParams();
  console.log(id);
  return <div>edit</div>;
}

export default Edit;
