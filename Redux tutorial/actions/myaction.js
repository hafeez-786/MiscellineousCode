// Below code for local data change 
// export const anotherName = (name) => {
//    return {
//        type: 'CHANGE_NAME',
//        payload: name
//    }
// }

// below code for first way to fetch json data globally
// export const anotherName = () => {
//   return (dispatch) => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(res2 => {
//         dispatch(
//           {
//             type: 'CHANGE_NAME',
//             payload: res2[0].name
//           }
//         )
//       })
//   }
// }

// below code for second way to fetch json data..
export const anotherName = () => {
  return async (dispatch) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const res2 = await data.json() 
    dispatch({
      type: 'CHANGE_NAME',
      payload: res2[0].name
    }) 
  }
}
