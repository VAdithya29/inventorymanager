import axios from "axios";
import { useState } from "react";
import Card from "../Card/Card";
import Note from "./Note";

function Notes() {
  function newNote() {
    setNotesNumber(notesNumber.concat(<Note />));
    axios.post();
  }
  const [notesNumber, setNotesNumber] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <div>
        {notesNumber.length === 0 && (
          <Card>
            <h1>No Notes Yet</h1>
            <h3>Click the + below to add a new note!</h3>
          </Card>
        )}
      </div>
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
