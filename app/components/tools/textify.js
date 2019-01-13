const camelToTitle = (camelCase) => {
  let chars = camelAddSpaces(camelCase)
  let text = charsToText(chars)
  text = capitaliseSentence(text)
  return text
}

const camelToDesc = (camelCase) => {
  let chars = camelAddSpaces(camelCase)
  let text = charsToText(chars)
  text = text.toLowerCase()
  text = capitaliseSentence(text)
  return text
}

const capitaliseSentence = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const charsToText = (chars) => {
  let text = ''
  for (let i = 0; i < chars.length; i++) { text += `${chars[i]}` }
  return text
}

const camelAddSpaces = (camelCase) => {
  let chars = camelCase.split('')
  let a = []
  for (let i = 0; i < chars.length; i++) {
    let c = chars[i]
    if (c === c.toUpperCase()) { a.push(' ') }
    a.push(c)
  }
  return a
}
