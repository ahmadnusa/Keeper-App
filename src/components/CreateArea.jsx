import React, { useState } from "react";
import { Fab, Zoom } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setnote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setnote({
      title: "",
      content: "",
    });
    setExpanded(false);
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  function handleClickAway() {
    setExpanded(false);
  }

  return (
    <div>
      <ClickAwayListener onClickAway={handleClickAway}>
        <form className="create-note">
          <input
            onClick={expand}
            onChange={handleChange}
            value={note.title}
            name="title"
            placeholder={isExpanded ? "Title" : "Take a note..."}
          />
          {isExpanded && (
            <textarea
              onChange={handleChange}
              value={note.content}
              name="content"
              placeholder="Note"
              rows={isExpanded ? "3" : "1"}
            />
          )}
          <Zoom in={isExpanded}>
            <Fab>
              <NoteAddIcon onClick={submitNote} />
            </Fab>
          </Zoom>
        </form>
      </ClickAwayListener>
    </div>
  );
}

export default CreateArea;
