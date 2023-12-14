import React from "react";
import { Fab, Zoom } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab color="warning" onClick={handleClick}>
        <DeleteForeverIcon />
      </Fab>
    </div>
  );
}

export default Note;
