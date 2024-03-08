import axios from "axios";
import Note from "./Note";
import { useEffect } from "react";

const NoteList = ({ notes, setNotes }) => {
  useEffect(() => {
    axios
      .get("http://localhost:3001/notes")
      .then((response) => setNotes(response.data))
      .catch((error) => console.error(error));
  }, [setNotes]);

  return (
    <ul>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </ul>
  );
};

export default NoteList;
