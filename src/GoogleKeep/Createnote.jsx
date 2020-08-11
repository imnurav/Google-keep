import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
// import Note from "./Note";
const Createnote = (props) => {
  const [note, setnote] = useState({
    title: "",
    content: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setnote((oldData) => {
      return { ...oldData, [name]: value };
    });
  };
  const addEvent = () => {
    props.passNote(note);
    setnote({
      title: "",
      content: "",
    });
  };
  return (
    <>
      <div className="main_note">
        <form>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={inputEvent}
            placeholder="Title"
            autoComplete="off"
          />
          <br />
          <textarea
            rows=""
            column=""
            name="content"
            value={note.content}
            onChange={inputEvent}
            placeholder="Write a note"
          ></textarea>
          <br />
          <Button onClick={addEvent}>
            <AddIcon className="plus_sign" />
          </Button>
        </form>
      </div>
    </>
  );
};
export default Createnote;
