 var secret = Math.floor(Math.random() * 10) + 1;

 var startBtn = document.getElementById('StartButton');
 startBtn.addEventListener('click', guessNumber);

 function guessNumber() {
     var guess = parseInt(prompt("Please choose a number between 1 and 10."));
     checkAnsswer(guess);
 }

 function checkAnsswer(guess) {
     var active = true;
     while (active) {
         if (guess === secret) {
             alert("You guessed it right,your guess is correct");
             active = false;
         } else if (guess < secret) {
             alert("Your guess was to low!");
             guessNumber();
         } else if (guess > secret) {
             alert("You guessed to high!");
             guessNumber();
         } else {
             alert("Invaid input!");
             guessNumber();
         }
     }
 }