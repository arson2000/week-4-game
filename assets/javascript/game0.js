var wins = 0;
    var losses = 0;
    var counter = 9;
    //When the user presses a key, it will run the code inside
    document.onkeyup = function(event) {
        //Determine which key was pressed
        var userGuess = event.key;
        //Randomly have the computer pick a letter a-z with 26 choices
        const compGuess = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))];
        if (userGuess === (event.key)) {
            //Compares the user guess to the computer guess, and tallies your wins, or losses.
            if (userGuess === compGuess) {
                wins++;
            } else if (userGuess !== compGuess) {
                losses++;
            } 
        }
        var html = "<p>Guess a letter.</p>" +
                   "<p>Wins: " + wins + "</p>" +
        		   "<p>Losses: " + losses + "</p>" +
        		   "<p>User Guess: " + userGuess + "</p>" +
        		   "<p>Computer Guess: " + compGuess + "</p>";
        document.querySelector("#game").innerHTML = html;
    }