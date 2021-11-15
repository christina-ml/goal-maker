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
    console.log("noteInput is: ", this.state.noteInput);
  }

  /* using spread operator to make copy of array - 
  -  you're not modifying the array directly. You're, making an entirely new copy, and replacing the existing one.
  - can use spread operator to make a copy of an objects as well.
  - it's a "shallow copy" that the spread operator makes.
  - .push doesn't make a copy of an array.
  */
  handleAddNote = () => {
    this.setState({
      notes: [...this.state.notes, this.state.noteInput],
      noteInput: '',
    })
  }

  // makes a copy of our previous array
  handleDeleteNote = (noteToDelete) => {
    let filteredNotes = this.state.notes.filter((note)=>{
      return note !== noteToDelete;
    })

    this.setState({
      notes: filteredNotes,
    })
  }


  render() {
    let notesToDisplay = this.state.notes.map((note)=>{
      return <Note myNote={note}/>
    })
    
    return (
      <div className="notes">
        <h2>Notes</h2>
        <textarea 
          value={this.state.noteInput} 
          onChange={this.handleNoteInput}
        />
        <button onClick={this.handleAddNote}>Add note</button>
        <div className="note-container">
          {notesToDisplay}
        </div>
      </div>
    );
  }
}

export default Notes;
