var user = prompt("If you are name strat with W enter yes?");

while (user == "no") {
    var user = prompt("If you are name strat with W enter yes?");
}

emj = '';

i=0;

smile = '<img src="smile.png" />';
sad = '<img src="sad.png" />';
coder = '<img src="em.png" />';

var emoji = prompt("Which emoji do you want?", "smile, sad or coder");
if (emoji == "smile") {
    var copies = prompt("How much emojis do you want?", "should not be zero");
    for (let i=0 ; i < copies; i++) {
        emj= emj + smile;  
    }
    document.write(emj);  
} else if (emoji == "sad") {
    var copies = prompt("How much emojis do you want?", "should not be zero");
    for (let i=0 ; i < copies; i++) {
        emj= emj + sad;  
    }
    document.write(emj);     
} else if (emoji == "coder"){
    var copies = prompt("How much emojis do you want?", "should not be zero");
    for (let i=0 ; i < copies; i++) {
        emj= emj + coder;  
    }
    document.write(emj);  
} else {
    var emoji = prompt("Which emoji do you want?", "smile, sad or coder");
}
