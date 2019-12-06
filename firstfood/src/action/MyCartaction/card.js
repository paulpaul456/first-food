// function deleteCart(custermerId) {
//   return function(dispatch) {
//     fetch(`http://localhost:6003/deletecart/${custermerId}`, {
//       method: 'DELETE',
//       headers: new Headers({
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       }),
//     })
//   }
// }
function addOrder(obj) {
  console.log(obj)
  return function(dispatch) {
    fetch(`http://localhost:6003/addorder`, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(obj),
    })
  }
}

export { addOrder }
