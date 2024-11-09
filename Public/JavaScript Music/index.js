var numberOfButtons = document.querySelectorAll(".item").length;
for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".item")[i].addEventListener("click", function () {
    var button = this.innerHTML;
    switch (button) {
      case "Tom-1 mp3":
        var audio1 = new Audio("./sound/tom-1.mp3");
        audio1.play();
        document.querySelector("h1").innerHTML =
          "Thanks for listening to the sound hope it was fun! 😍";
        break;
      case "Tom-2 mp3":
        var audio2 = new Audio("./sound/tom-2.mp3");
        audio2.play();
        document.querySelector("h1").innerHTML =
          "I'm sure you enjoyed the sound! 😘";
        break;
      case "Snare mp3":
        var audio3 = new Audio("./sound/snare.mp3");
        audio3.play();
        document.querySelector("h1").innerHTML =
          "Wow this sound was really fan to listen to! 😊";
        break;
      case "Crash mp3":
        var audio4 = new Audio("./sound/crash.mp3");
        audio4.play();
        document.querySelector("h1").innerHTML = "You are amazing my gee! ❤️💪";
      default:
    }
  });
}
