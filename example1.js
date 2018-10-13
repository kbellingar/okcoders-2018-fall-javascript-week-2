// var message = " bottles of beer on the wall. "
// var message2 = " bottles of beer. Take one down, pass it around, "
// var message3 = ""

/*
console.log(message + 1);
console.log(message + 2);
console.log(message + 3);
console.log(message + 4);
console.log(message + 5);
console.log(message + 6);
console.log(message + 7);
console.log(message + 8);
*/

//var number = 99;
// Demonstrate how to use a loop
/* while(number <= 8) {
    console.log(message + number);
    number++;
} 
*/


/* while(number >= 1) {
    console.log(number + message + number + message2);
    number--;
    console.log(number + message)

}
*/
for(var num = 99; num > 0; num--){
    console.log(num + " bottles of beer on the wall");
    console.log(num + " bottles of beer");
    console.log("Takes one down, pass it around");
    if( (num -1) != 0){
    console.log((num - 1) + " bottles of beer on the wall");
    } else {
        console.log("No more bottles of beer on the wall/");
    }
}