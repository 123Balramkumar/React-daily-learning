//state is used for rerender the virtual DOM

import React, { useState } from "react";

function State() {
    // this below line is change the Balram into poddar using state
//   let [data, setData] = useState("Balram");


// the below line is for increase the count on virtual DOM 
  let [data, setData] = useState(0);

  function updateData() {
    // setData("Poddar");
    setData(data+1);

  }
  return (
    <div>
      <div>{data}</div>
      <button onClick={updateData}>Update me</button>
    </div>
  );
}

export default State;
