import React from "react";

class Note extends React.Component {
  render() {
    return (
      <div className="note">
        <h4>Title</h4>
        <div>
          {this.props.myNote}
        </div>
        {/* pass in the argument of the note that we want to delete, using an anonymous function */}
        <button onClick={()=>this.props.handleDeleteNote(this.props.note)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Note;
