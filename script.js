document.getElementById("getQuote").addEventListener("click", function(event) {
    const url = 'https://animechan.vercel.app/api/random';
    fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        let anime = json.anime;
        let character = json.character;
        let quote = json.quote;
        document.getElementById("animeName").innerHTML = "Anime: " + anime;
        document.getElementById("characterName").innerHTML = "Character: " + character;
        document.getElementById("quoteText").innerHTML = "\"" + quote + "\"";
    });
    //document.getElementById("test").innerHTML = Math.floor(Math.random()*11);
});