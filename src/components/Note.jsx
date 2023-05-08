import React from "react";
import delet from "../trash-solid.svg"

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note" style={{margin:"1rem"}}>
      <h1 style={{fontSize:"2rem"}}>{props.title}</h1>
      <hr />
      <p style={{fontSize:"1rem"}}>{props.content}</p>
      
      <button onClick={handleClick}><img src={delet} alt="Del" /></button>
    </div>
  );
}

export default Note;
