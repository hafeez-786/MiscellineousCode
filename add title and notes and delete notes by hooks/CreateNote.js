import React, { useState } from 'react'
import Button from '@material-ui/core/Button';

const CreateNote = (props) => {
  // for expand means toggle
  const [expand, setExpand] = useState(false);

  const [Note, setNote] = useState({
    title: '',
    content: ''
  });

  const inputEvent = (e) => {
    //const value = e.target.value;
    //const name = e.target.name;
    const { name, value } = e.target // Object destructuring
    setNote((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  }

  const addEvent = () => {
    props.passNote(Note)
    setNote({
      title: '',
      content: ''
    })
  }

  const expandIt = () => {
    setExpand(true)
  }
  
  const backToNormal = () => {
    setExpand (false);
  }
  return (
    <div>
      <div className="MainNote" onDoubleClick= {backToNormal}>
        <form>
          {expand ?
            <input
              type="text"
              placeholder="Title.."
              name="title"
              value={Note.title}
              onChange={inputEvent}
              autoComplete="off"
              className="form-input"
            /> : null}

          <textarea
            rows=""
            column=""
            className="textArea"
            name="content"
            value={Note.content}
            onChange={inputEvent}
            onClick={expandIt}
            placeholder="Write a note...">
          </textarea>

          {expand ?
            <div>
              <br></br>
              <Button variant="contained" color="primary" onClick={addEvent}>
                <span>+</span>
              </Button>
            </div> : null}
        </form>
      </div>
    </div>
  )
}
export default CreateNote