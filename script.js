var guesses = 15;
var difficult = ["JELLYFISH", "SUCCULENTS", "MAGNOLIA", "STRAWBERRIES", "GORILLA", "SPACESHIP"];
var medium = ["CHOCOLATE", "MOUNTAIN", "GIRAFFE", "COMPUTER", "BICYCLE"];
var easy = ["CANDY", "ORCA", "JUICE", "YELLOW", "CHINA", "TIGER", "BEACH"];
var result = "";
var guessedLetters = [];
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function hangman(difficulty){
    document.getElementById("win").innerHTML = "";
    document.getElementById("lose").innerHTML = "";
    if(difficulty == 1){
        result = easy[Math.floor(Math.random() * easy.length)];
    }

    if(difficulty == 2){
        result = medium[Math.floor(Math.random() * medium.length)];
    }

    if(difficulty == 3){
        result = difficult[Math.floor(Math.random() * difficult.length)];
    }
    console.log(result);
    printWord();
    letterPopulate();
}

function printWord(){
    var slots = "";
    for (var i = 0; i < result.length; i++) {
        if (guessedLetters.indexOf(result[i])>-1){
            slots+= result[i];
        } else {
            slots+= " _ ";
        }
    }
    document.getElementById("slots").innerHTML = slots;
    if(slots.indexOf("_") > -1) {
        document.getElementById("guess").innerHTML = "you have " + guesses + " guesses remaining";
    }
    return slots;
}

function chooseLetter(letter) {
    var slots = ""
    if(guesses>0){
        guessedLetters.push(letter);
        if (result.indexOf(letter) <= -1) {
            guesses--;
        }
        if (slots.indexOf("_") > -1) {
            document.getElementById("lose").innerHTML = "YOU LOST ... &#9785";
        }else{
            if(guesses <= 0){
                document.getElementById("lose").innerHTML = "YOU LOST ... &#9785";
            }
        }
        printWord();
        var slots = printWord();
        if (slots.indexOf("_") == -1) {
            return document.getElementById("win").innerHTML = "YOU WON!";
        }
        letterPopulate();
    }
}

function letterPopulate(){
    var rt = "";
    for(var i = 0; i< alphabet.length; i++) {
        if (guessedLetters.indexOf(alphabet[i]) > -1) {
            rt += "<button class= 'letter' onclick = 'chooseLetter(this.value)' value ='" + alphabet[i] + "' disabled >" + alphabet[i] + "</button>"
        } else {
            rt += "<button class= 'letter' onclick = 'chooseLetter(this.value)' value ='" + alphabet[i] + "'>" + alphabet[i] + "</button>"
        }
    }
    return document.getElementById("buttons").innerHTML = rt;
}
