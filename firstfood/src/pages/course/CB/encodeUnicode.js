export const encodeUnicode = (str) => {
  let res = []
  for (let i = 0; i < str.length; i++) {
    res[i] = ('00' + str.charCodeAt(i).toString(16)).slice(-4)
  }
  return new RegExp('\\u' + res.join('\\u'))
}