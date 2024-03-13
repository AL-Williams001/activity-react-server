import axios from "axios";
const baseURl = "https://notes-api-xi97.onrender.com";

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
