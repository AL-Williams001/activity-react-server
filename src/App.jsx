import "./App.css";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <h1>Notes</h1>
      <NoteList notes={notes} setNotes={setNotes} />
      <NoteForm notes={notes} setNotes={setNotes} /> /
    </div>
  );
}

export default App;
