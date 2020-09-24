import React, { useState } from 'react';
import './Main.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note'

const App = () => {
  const [addItem, setAddItem] = useState([])
  const addNote = (Note) => {
    setAddItem((prevData) => {
      return [...prevData, Note]
    });
  }

  // For delete items
  const onDelete = (id) => {
    setAddItem((oldData) => 
      oldData.filter((currnData, indx) => {
        return indx !==id;
      })
    )
  }

  return (
    <div>
      <Header />
      <CreateNote passNote={addNote} />
      <div className="container">
        <div className="row">
          {
            addItem.map((val, index) => {
              return <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem = {onDelete}
              />
            })
          }
        </div>
      </div>
      <Footer />
      <div className="marginCommon"></div>
    </div >
  )
}

export default App