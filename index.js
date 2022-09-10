let tom1 = new Audio("./sounds/tom-1.mp3");
let tom2 = new Audio("./sounds/tom-2.mp3");
let tom3 = new Audio("./sounds/tom-3.mp3");
let tom4 = new Audio("./sounds/tom-4.mp3");
let kick = new Audio("./sounds/kick-bass.mp3");
let snare = new Audio("./sounds/snare.mp3");
let crash = new Audio("./sounds/crash.mp3");

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "a":
      tom1.cloneNode(true).play();
      break;
    case "s":
      tom2.cloneNode(true).play();
      break;
    case "d":
      tom3.cloneNode(true).play();
      break;
    case "f":
      tom4.cloneNode(true).play();
      break;
    case "j":
      crash.cloneNode(true).play();
      break;
    case "k":
      kick.cloneNode(true).play();
      break;
    case "l":
      snare.cloneNode(true).play();
      break;
  }
});
