
function makeMessage(test){
    if(test){
    console.log("I called a function");
    } else {
        console.log("I called a function differently");
    }
}

makeMessage(true);
makeMessage(false);
makeMessage(true);
makeMessage(true);
makeMessage(false);
makeMessage(0);

console.log("What is the status of: " + test);

//loops inside of loops

/* for(var num1 = 1; num1 < 73; num1++){
    message = ""
    for(var num2 = 1; num2 <= num1; num2++){
        message = message + num2 + " ";
        
    }
    console.log(message);
} 
*/
