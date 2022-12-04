function generate(){
    let quotes = {
        "- Albert Einstein":'"Life is like a bicycle. To keep your balance, you must keep moving."',
        "- Confucius":'"Life is really simple, but we insist on making it complicated."',
        "- Sholom Aleichem":'"Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor."',
        "- Clea Shearer":'"Self-examining is the best thing you can possibly do and it costs nothing. Self-examining is what saved me."',
        "- Oscar Wilde":'"Be yourself, everyone else is already taken."',
        "- Walt Disney":'"The way to get started is to quit talking and begin doing."',
        "- Oprah Winfrey":`"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
        "- Tony Robbins":'"Setting goals is the first step in turning the invisible into the visible."',
    }


    let authors = Object.keys(quotes);
    
    let author = authors[Math.floor(Math.random()* authors.length)];
    
    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}

