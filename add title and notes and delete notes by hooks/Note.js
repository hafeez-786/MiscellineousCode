import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {

  // For delete items
  const deleteNote = () => {
    props.deleteItem(props.id);
  }
  return (
    <>
      <div className="Main-Note mg-top-bottom">
        <div className="Note">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <DeleteOutlineIcon className="delete-icon" onClick={deleteNote} />
        </div>
      </div>
    </>
  )
}
export default Note