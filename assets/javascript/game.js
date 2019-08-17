let cpuOptions = ["r", "p", "s"],
    wins = 0,
    losses = 0,
    ties = 0,
    winsText = document.getElementById("wins"),
    lossesText = document.getElementById("losses"),
    tiesText = document.getElementById("ties"),
    userChoiceText = document.getElementById("user-choice"),
    cpuChoiceText = document.getElementById("cpu-choice");

document.onkeyup = function(event) {

  let cpuGuess = cpuOptions[Math.floor(Math.random() * 3)],
      userGuess = event.key;
          
  if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

    // Nested if statement
    if ((userGuess === "r" && cpuGuess === "s") ||
        (userGuess === "s" && cpuGuess === "p") || 
        (userGuess === "p" && cpuGuess === "r")) {
        wins++;
    } else if (userGuess === cpuGuess) {
        ties++;     
    } else {
        losses++;
    }
  } else {
    alert("You hit the wrong key!")
  }

    userChoiceText.innerHTML = `<p>You chose: ${userGuess.toUpperCase()}</p>`;
    cpuChoiceText.innerHTML = `<p>The computer chose: ${cpuGuess.toUpperCase()}</p>`;
    winsText.innerHTML = `<p>Wins: ${wins}</p>`;
    lossesText.innerHTML = `<p>Losses: ${losses}</p>`;
    tiesText.innerHTML = `<p>Ties: ${ties}</p>`;
};


































    







