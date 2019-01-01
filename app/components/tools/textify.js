const camelToTitle = (camelCase) => {
  let chars = camelCase.split('')
  let t = ''
  for (let i in chars) {
    if (chars[i] === chars[i].toUpperCase()) t += ' '
    t += chars[i]
  }
  return t.charAt(0).toUpperCase() + t.slice(1)
}
