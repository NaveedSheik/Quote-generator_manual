function generate(){
    var quotes = {
        "- Martin Fowler" : '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."',
        "- John Johnson" : '"First, solve the problem. Then, write the code."',
        "- Oscar Wilde" : '"Experience is the name everyone gives to their mistakes."',
        "- Coco Chanel" : '"In order to be irreplaceable, one must always be different"',
        "- Ralph Johnson" : '"Before software can be reusable it first has to be usable."',
        "- Bill Gates" : '"Your most unhappy customers are your greatest source of learning."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() *
        authors.length)]

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}
