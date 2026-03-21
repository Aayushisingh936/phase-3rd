let quote = document.querySelector('#quote')
let author = document.querySelector('#author')
let btnGenerate = document.querySelector('#btnGenerate')
let btnBack = document.querySelector('#btnBack')

const quotes = [
    {
        quote: "Belive you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        quote:"success is not final, failure is not fatal.",
        author:"Winston Churchill"
    },
    {
        quote: "Dream big and dare to fail.",
        author:"Norman Vaughan"
    }

]
let currentIndex = 0

btnGenerate.addEventListener('click', nextQuote)
btnBack.addEventListener('click', previousQuote)

function nextQuote(){

    currentIndex++

    if (currentIndex >= quotes.length) {
        currentIndex = 0;
    }
    quote.innerHTML = quotes[currentIndex].quote
    author.innerText = quotes[currentIndex].author
}


function previousQuote(){

    currentIndex++

    if(currentIndex < 0){
        currentIndex = quotes.length - 1
    }


    quote.innerText = quotes[currentIndex].quote
    author.innerHTML= quotes[currentIndex].author
}
