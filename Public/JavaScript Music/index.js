var numberOfButtons = document.querySelectorAll(".item").length
for(var i = 0; i < numberOfButtons; i++){
document.querySelectorAll(".item")[i].addEventListener("click", function(){
   var button = this.innerHTML
   switch(button){
    case "SOUND A":
        var audio1 = new Audio("./sound/tom-1.mp3")
        audio1.play();
        document.querySelector("h1").innerHTML = "Thanks for listening to the sound"
        break;
    case "SOUND B":
        var audio2 = new Audio("./sound/tom-2.mp3")
        audio2.play();
        break;
    case "SOUND C":
        var audio3 = new Audio("./sound/tom-3.mp3")
        audio3.play();
        break;
    case "SOUND D":
        var audio4 = new Audio("./sound/crash.mp3")
        audio4.play();
    default:
   }
});
}

const currentYear = new Date().getFullYear()
document.querySelector("footer").innerHTML = "copyright © " + currentYear;

