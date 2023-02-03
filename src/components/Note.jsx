import React from "react";

function Note(props) {
  function isClicked() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={isClicked}>DELETE</button>
    </div>
  );
}

export default Note;
