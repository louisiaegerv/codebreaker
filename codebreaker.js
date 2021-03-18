// npm install readline-sync
const readline = require('readline-sync')

let answer = ''

let convertToNum = (letter) => {
  let letterCode = letter.charCodeAt()
  let returnVal = null
  return letterCode < 91 ? letterCode - 64 : letterCode - 96
}

while (answer != 'e') {
  answer = readline.question("Enter text to calculate or 'e' to end: ")
  total = 0
  if (answer != 'e') {
    for (i in answer) {
      let letter = answer[i]
      if (letter != ' ') {
        let letterVal = convertToNum(letter)
        console.log(`${letter}: ${letterVal}`)
        total += letterVal
      }
    }
    console.log(`total: ${total}\n`)
  }
}
