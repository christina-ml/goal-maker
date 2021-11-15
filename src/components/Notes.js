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

  handleNoteInput = (event) => {
    this.setState({
      noteInput: event.target.value,
    })
  }

  render() {
    let notesToDisplay = this.state.notes.map((note)=>{
      return <Note myNote={note}/>
    })
    
    return (
      <div className="notes">
        <h2>Notes</h2>
        <textarea />
        <button>Add note</button>
        <div className="note-container">
          {notesToDisplay}
        </div>
      </div>
    );
  }
}

export default Notes;
