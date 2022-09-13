let cat = document.getElementById('quote-tags')
let quote = document.getElementById('quote-text')
let nam = document.getElementById('quote-author')
let quoteBtn = document.getElementById('gen-new-quote')

const url = "https://type.fit/api/quotes";

function generateQuote() {

    return fetch(url)
        .then(resp =>resp.json())
       .then(quotes => {
           let len = quotes.length;
           let i = Math.floor(Math.random() * len)
           let qt = quotes[i];
           quote.textContent = qt.text;
           nam.textContent = ` -- ${qt.author}`;

        })
        .catch(err => {
            console.log(err);
        });
    }


quoteBtn.addEventListener('click', generateQuote);

function like (){
    document.getElementById("li").style.color = "purple";
    document.getElementById("di").style.color = "grey";
}

function dislike (){
    document.getElementById("di").style.color = "purple";
    document.getElementById("li").style.color = "grey";
}

//how to create a prompt button?
function promptMe(){
    var userAdjective = prompt("Please provide an Adjective");
    alert (userAdjective);
}

<button id="bgnBtn" onclick="promptMe()">Start Game</button>


