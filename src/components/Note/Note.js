import Card from "../Card/Card";
import "./Note.css";

function Note() {
  return (
    <div>
      <Card>
        <div className="indnote">
          <input></input>
          <textarea></textarea>
        </div>
      </Card>
    </div>
  );
}

export default Note;