
const counterReducer = (state = 0, action) => { // initial value of state is 0
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state
  }
}
export default counterReducer