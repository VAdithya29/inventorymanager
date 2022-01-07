import { useState } from "react";
import Card from "../Card/Card";
import Note from "./Note";

function Notes() {
  function newNote() {
    setNotesNumber(notesNumber.concat(<Note />));
  }
  const [notesNumber, setNotesNumber] = useState([]);
  return (
    <div>
      {notesNumber}
      <Card>
        <button type="button" onClick={newNote}>
          +
        </button>
      </Card>
    </div>
  );
}

export default Notes;
