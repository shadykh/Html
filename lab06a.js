var user = prompt("Do you want to play a game? If yes, type yes!!!");

while (user !== "yes") {
    var user = prompt("you should write yes !!");
}

function guessMyNum() {
    var num = Math.floor(Math.random() * 10);
    return num;
}


if (user == "yes") {
    alert ("choose a number from 0 to 9 and I will guess it!!")
     var game  = prompt('Now you should picked a number! So, to continue type yes');
}

while (game == "yes") {
    var guess = guessMyNum();
    var sure  = prompt('Is this is your number : ' + guess);
    if (sure == "yes") {
        document.write('<span style="font-size:45px; color:red;font-family:courier">This is your number:</span>'+guess);
        break;
        
    }
}
