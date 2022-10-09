import React from 'react'

function Event() {
    let data = "pitter";
    function Apple(){
     
        alert("hello Balram");

    }
  return (
    <div >
        <h1>{data}</h1>
        <button on onClick={Apple}  >Click me </button>
        
    </div>
  )
}

export default Event