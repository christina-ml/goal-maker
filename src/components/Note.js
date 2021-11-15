import React from "react";

class Note extends React.Component {
  render() {
    return (
      <div className="note">
        <h4>Title</h4>
        <div>
          {this.props.myNote}
        </div>
      </div>
    );
  }
}

export default Note;
