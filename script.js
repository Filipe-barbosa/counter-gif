const time = 0;
const home = document.getElementById("home");
let controlTime = 0;
const gameInput = document.querySelector(".game-input > input");
let elapsedTime = 0;

function starthome() {
  const value = parseInt(gameInput.value);
  controlTime = value;
  if (value <= 0) {
		alert("o valor do tempo tem que ser maior que zero");
		gameInput.value = "";
  } else {
    document.getElementById("Success").style.display = "none";
    document.getElementById("home").style.display = "none";
    starCountdown(value);
  }
}

function starCountdown(time) {
  const remainingTime = Math.max(controlTime - elapsedTime, 0);
  const nonRedValue = Math.ceil((255 * remainingTime) / controlTime);
  document.body.style.background = `rgb(${nonRedValue}, 255, ${nonRedValue})`;
  document.getElementById("Countdown").style.display = "inline";
  document.getElementById("contador").innerHTML =
    "Faltam " + time + " segundos.";
  setTimeout(() => {
    time--;
    elapsedTime++;
    if (time > 0) {
      starCountdown(time);
    }
    if (time == 0) {
      document.getElementById("Countdown").style.display = "none";
      starSuccess(time);
    }
  }, 1000);
}

function starSuccess(tempo) {
  document.getElementById("Countdown").style.display = "none";
  document.getElementById("Success").style.display = "inline";
}

function executeloop() {
  document.body.style.background = "rgb(255, 255, 255)";
  document.getElementById("home").style.display = "inline";
  document.getElementById("Success").style.display = "none";
	gameInput.value = "";
	elapsedTime = 0 ;
}
