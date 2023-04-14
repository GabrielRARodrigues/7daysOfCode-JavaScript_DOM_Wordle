const apiUrl = 'https://api.dicionario-aberto.net/random'

let word = ''

async function getRandomWord() {
  while (word.length != 5) {
    const response = await fetch(apiUrl)
    const JSONResponse = await response.json()
    const wordObject = JSONResponse
    word = wordObject.word
  }
 
}

getRandomWord()
