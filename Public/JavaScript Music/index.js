var numberOfButtons = document.querySelectorAll(".item").length
for(var i = 0; i < numberOfButtons; i++){
document.querySelectorAll(".item")[i].addEventListener("click", function(){
   var button = this.innerHTML
   switch(button){
    case "click on me to play black sheriff kilos millos mp3":
        var audio1 = new Audio("./Black-Sherif-Kilos-Milos-(TrendyBeatz.com).mp3")
        audio1.play();
        document.querySelector(".color1").innerHTML = "Playing now, enjoy!"
        break;
    case "click on me to play kidi, black sheriff lomo lomo mp3":
        var audio2 = new Audio("./KiDi-Ft-Black-Sherif-Lomo-Lomo-(TrendyBeatz.com).mp3")
        audio2.play();
        document.querySelector(".color2").innerHTML = "Playing now, enjoy!"
        break;
    case "click on me to play R City ft Adam Locked away mp3":
        var audio3 = new Audio("./R_City_ft_Adam_Levine_-_Locked_Away_(Jesusfuly.com).mp3")
        audio3.play();
        document.querySelector(".color3").innerHTML = "Playing now, enjoy!"
        break;
    case "click on me to play Shain Twain You're still the one":
        var audio4 = new Audio("./Shania_Twain_-_Youre_Still_The_One_(Jesusfuly.com).mp3")
        audio4.play();
        document.querySelector(".color4").innerHTML = "playing now, enjoy!"
    default:
   }
});
}

const currentYear = new Date().getFullYear()
document.querySelector("footer").innerHTML = "copyright © " + currentYear;

