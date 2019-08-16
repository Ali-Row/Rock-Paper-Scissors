let cpuOptions = ["r", "p", "s"],

    wins = 0,
    losses = 0,
    ties = 0,

    userChoiceText = document.getElementById("user-choice"),
    cpuChoiceText = document.getElementById("cpu-choice"),
    winsText = document.getElementById("wins"),
    lossesText = document.getElementById("losses"),
    tiesText = document.getElementById("ties");

document.onkeyup = function(event) {

  let cpuGuess = cpuOptions[Math.floor(Math.random() * cpuOptions.length)],
      userGuess = event.key;

    if ((userGuess === "r" && cpuGuess === "s") ||
      (userGuess === "s" && cpuGuess === "p") || 
      (userGuess === "p" && cpuGuess === "r")) {
      wins++;

    } else if (userGuess === cpuGuess) {
      ties++;

    } else {
      losses++;
    }

    userChoiceText.innerHTML = `<p>You chose: ${userGuess.toUpperCase()}</p>`;
    cpuChoiceText.innerHTML = `<p>The computer chose: ${cpuGuess.toUpperCase()}</p>`;
    winsText.innerHTML = `<p>Wins: ${wins}</p>`;
    lossesText.innerHTML = `<p>Losses: ${losses}</p>`;
    tiesText.innerHTML = `<p>Ties: ${ties}</p>`;
};


































    







