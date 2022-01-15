import axios from "axios";
import { useState } from "react";
import Card from "../Card/Card";
import "./Note.css";

function Note() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }
  function contentChangeHandler(event) {
    setContent(event.target.value);
  }
  function saveNote() {
    axios.post("http://localhost:5000/notes", {});
  }

  return (
    <div>
      <Card>
        <div className="indnote">
          <input onChange={titleChangeHandler} placeholder="Title"></input>
          <textarea onChange={contentChangeHandler}></textarea>
          <button onClick={saveNote}>Save</button>
        </div>
      </Card>
    </div>
  );
}

export default Note;
