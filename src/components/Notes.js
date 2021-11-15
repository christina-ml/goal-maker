import React from "react";
import Note from "./Note";

class Notes extends React.Component {
  render() {
    return (
      <div className="notes">
        <h2>Notes</h2>
        <input type="text" />
        <button>Add note</button>
        <div className="note-container">
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
      </div>
    );
  }
}

export default Notes;
