import axios from "axios";
const baseURl = "http://localhost:3001/api/notes";

function getAllNotes() {
  return axios.get(baseURl);
}

function createNote(newNote) {
  return axios.post(baseURl, newNote);
}

function updateNote(id, newNote) {
  return axios.put(`${baseURl}/${id}`, newNote);
}

function deleteNote(id) {
  return axios.delete(`${baseURl}/${id}`);
}

export default {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
};
