// on the basis of action means anything gets the action and return to the state
// Now our state is blank with array
const userReducer = (state = [], action) => {
  switch (action.type) { // Might be any type of action
    case "ADD_USER":
      return [...state, { name: action.payload }]; // Now our state have a blank then we created a new object
    case "REMOVE_USER":
      return state.filter((item, index) => action.payload !== index);
    default:
      return state;
    // It is using for removing our state 
  }
}
export default userReducer