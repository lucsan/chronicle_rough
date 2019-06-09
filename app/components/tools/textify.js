const camelToTitle = (camelCase) => {
  let chars = camelAddSpaces(camelCase)
  let text = charsToText(chars)
  text = capitaliseSentence(text)
  return text
}

const titleAddEmoji = (title) => {
  return emojify(title)
  // console.log('title', title);
  // //if (title == 'Look') return '&#128269;'
  // if (title == 'Look') return '🏸'
  // //if (title == 'Look') return emojiToHtml('🏸')
  //
  //
  // return title
}

// const emojiToHtml = (emoji) => {
//   if (emoji == '🏸') return '&#127992;' //'&#1F332;'
//   if (emoji == '🌲') return '&#127794;'

  // ✊	9994	270A
  // ⛏	9935	26CF
  // 👊	128074	1F44A
  //🔍	128269	1F50D
// 🔎	128270	1F50E
// 🚶	128694	1F6B6
// ⚜	9884	269C
// 🔱 ⚜


//}

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
