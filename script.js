// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var lives = 3; // 3 strikes and you're out!

function updateLives(num) {
  document.getElementById("lives").innerText = num;
}

// From MDN Web Docs
// https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function generatePattern() {
  for (let i = 0; i < pattern.length - 1; i++) {
    pattern[i] = getRandomIntInclusive(1, 6);
  }
  console.log(pattern);
}
function startGame() {
  //initialize game variables
  generatePattern();
  lives = 3;
  updateLives(lives);
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  //initialize game variables
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playAudio(btn);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}
function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}
function winGame() {
  stopGame();
  alert("Congrats. You win.");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (btn != pattern[guessCounter]) {
    // wrong guess -> lose 1 life
    lives--;
    updateLives(lives);
    if (lives <= 0) {
      loseGame();
    }
  } else {
    if (guessCounter == progress) {
      // Check if game progress is finished
      if (progress < pattern.length - 1) {
        // game not finished -> play next sequence
        progress++;
        if (clueHoldTime != 0) {
          clueHoldTime -= 50;
        }
        playClueSequence();
      } else {
        // game finished
        winGame();
      }
    } else {
      // there are more guesses to check
      guessCounter++;
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 150,
  2: 200,
  3: 250,
  4: 300,
  5: 350,
  6: 400
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

function playAudio(btn) {
  switch (btn) {
    case 1:
      document.getElementById("dog").play();
      break;
    case 2:
      document.getElementById("monkey").play();
      break;
    case 3:
      document.getElementById("frog").play();
      break;
    case 4:
      document.getElementById("sheep").play();
      break;
    case 5:
      document.getElementById("cat").play();
      break;
    case 6:
      document.getElementById("pig").play();
      break;
    default:
      break;
  }
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
