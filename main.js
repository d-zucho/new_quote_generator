/* *
 * In the future, if want to switch back to API,
 * go to https://zenquotes.io
 */

const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const twitterButton = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

// show new quote
const newQuote = () => {
  //* pick a random quote
  let index = Math.floor(Math.random() * 100)
  getQuote(index)
}

//* retrieve random quote from array and insert into HTML
const getQuote = (index) => {
  try {
    //* get specific quote from quotes array
    const quote = localQuotes[index]
    const { text, author } = quote

    if (quote.text.length > 100) {
      quoteText.classList.add('long-quote')
    } else {
      quoteText.classList.remove('long-quote')
    }

    //* insert retrieved quote into HTML
    quoteText.innerHTML = text
    quoteAuthor.innerHTML = author
  } catch (error) {
    console.log('Something went wrong')
  }
}

const twitterURL = `https://www.twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`
console.log(quoteText.textContent)

//? ------  button event listeners ------
twitterButton.addEventListener('click', (e) => {
  window.open(twitterURL, '_blank')
})

newQuoteBtn.addEventListener('click', (e) => {
  newQuote()
})

//** ---------- ON LOAD ----------- */
newQuote()
