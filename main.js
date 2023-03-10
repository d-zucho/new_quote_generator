// show new quote

const newQuote = () => {
  // pick a random quote
  let index = Math.floor(Math.random() * 100)
  getQuote(index)
}

const getQuote = (index) => {
  try {
    // get specific quote from quotes array
    const quote = localQuotes[index]
    const { text, author } = quote

    // insert retrieved quote into HTML
    document.getElementById('quote').innerHTML = text
    document.getElementById('author').innerHTML = author
  } catch (error) {
    console.log('Something went wrong')
  }
}

newQuote()
