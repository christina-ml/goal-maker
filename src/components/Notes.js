import React from "react";
import Note from "./Note";

class Notes extends React.Component {
  constructor(){
    super();

    this.state = {
      noteInput: '',
      notes: [],
    }
  }

  render() {
    let notesToDisplay = this.state.notes.map((note)=>{
      return <Note myNote={note}/>
    })
    
    return (
      <div className="notes">
        <h2>Notes</h2>
        <input type="text" />
        <button>Add note</button>
        <div className="note-container">
          {notesToDisplay}
        </div>
      </div>
    );
  }
}

export default Notes;
