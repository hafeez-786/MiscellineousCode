import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, addUser, removeUser } from './actions/index'

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
    <div>
      {/* <h1>I am learning React and readux</h1> */}
      <h2>Counter</h2>
      <button
        className="btn-primary"
        onClick={() => dispatch(decrement())}>-</button>
        &nbsp;{count}&nbsp;
      <button
        className="btn btn-primary"
        onClick={() => dispatch(increment())}
      >+</button><br /><br />
      <button className="btn btn-primary" onClick={() => dispatch(reset())}>Reset</button>

      <br /><br />
      <h2>User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="user.." ref={userRef} />
      </form>
      <ol>
        {users.map((user, index) => {
          return <li key={index}>{user.name}
          <button onClick={() => dispatch(removeUser(index))}>&times;</button>
          </li>
        })}
      </ol>
    </div>
  )
}
export default App