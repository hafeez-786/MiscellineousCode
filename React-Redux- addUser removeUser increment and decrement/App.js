import React, { useRef } from 'react'
import { Container } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, addUser, removeUser } from './actions'

const App = () => {
  const count = useSelector(state => state.counterReducer);
  const users = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const userRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(userRef.current.value));
    userRef.current.value = "";
  }
  return (
    <>
      <Container>
        <h1>Bismillahhirrehmannirahim</h1>
        <h2 style={{ marginBottom: "5px" }}>Counter</h2>
        <button onClick={() => dispatch(increment())}>+</button>
         &nbsp;{count} &nbsp;
        <button onClick={() => dispatch(decrement())}>-</button>
        <div style={{ marginTop: '5px' }}>
          <button onClick={() => dispatch(reset())} style={{ width: '66px' }}>Reset</button>
        </div>

        <h2 style={{ marginBottom: "5px" }}>Users</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="add user" ref={userRef} />
        </form>
        <ol>
          {
            users.map((user, index) => (
              <div key={index}>
                <li>{user.name} &nbsp;&nbsp;
                <button onClick={() => dispatch(removeUser(index))}>
                  X</button>
                </li>
              </div>
            ))
          }
        </ol>
        
      </Container>
    </>
  )
}
export default App