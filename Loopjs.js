var user = prompt("If you want to enter this website please prove that you are human... by typing yes!!!");

while (user !== "yes") {
    var user = prompt("you should be human so write yes here!!");
}

emj = '';

i=0;

smile = '<img src="smile.png" />';
sad = '<img src="sad.png" />';
coder = '<img src="em.png" />';

var emoji = prompt("Which emoji do you want?", "smile, sad or coder");

while (emoji !== "coder" && (emoji !== "smile" && emoji !== "sad") ) {
    var emoji = prompt("You should only choose smile or sad or coder", "smile, sad or coder"); 
}

if (emoji == "smile") {
    var copies = prompt("How much emojis do you want?", "should not be zero or negative");
    while (copies <= 0 ) {
        var copies = prompt("You entered number equal or less than 0,  please try again!", "should not be zero or negative");
    }
    for (let i=0 ; i < copies; i++) {
        emj= emj + smile;  
    }
    document.write(emj);  
} else if (emoji == "sad") {
    var copies = prompt("How much emojis do you want?", "should not be zero or negative");
    while (copies <= 0 ) {
        var copies = prompt("You entered number equal or less than 0, please try again!", "should not be zero or negative");
    }

    for (let i=0 ; i < copies; i++) {
        emj= emj + sad;  
    }
    document.write(emj);     
} else if (emoji == "coder"){
    var copies = prompt("How much emojis do you want?", "should not be zero or negative");
    while (copies <= 0 ) {
        var copies = prompt("You entered number equal or less than 0,  please try again!", "should not be zero or negative");
    }

    for (let i=0 ; i < copies; i++) {
        emj= emj + coder;  
    }
    document.write(emj);  
}
