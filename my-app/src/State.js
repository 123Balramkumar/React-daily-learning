//state is used for rerender the virtual DOM

import React, { useState } from "react";

function State() {
  let [data, setData] = useState("Balram");

  function updateData() {
    setData("Poddar");
  }
  return (
    <div>
      <div>{data}</div>
      <button onClick={updateData}>Update me</button>
    </div>
  );
}

export default State;
