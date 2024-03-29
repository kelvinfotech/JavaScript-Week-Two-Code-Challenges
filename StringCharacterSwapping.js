// the function 'swapCase' takes a string 'inputString' as input and returns a new string where the case of each character is swapped in the sense that lowercase letters become uppercase and vice versa
function swapCase(inputString) {
    //an empty string 'swappedString' is initialized to store the swapped characters
    let swappedString = "";
    //the function iterates over each character of the input string using a 'for' loop
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString.charAt(i);
        //within the loop, it checks if the current character is uppercase by comparing it to its uppercase version using 'toUpperCase()' method and if the character is uppercase, it converts it to lowercase and appends it to 'swappedString'
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
            //if the character is not uppercase, it is then assumed to be lowercase and it is converted to uppercase and appended to 'swappedString'
        } else {
            swappedString += char.toUpperCase();
        }
    }
    //after processing all characters in the input string, the function returns the 'swappedString'
    return swappedString;
}
//'inputString' is defined with a string value 'Blessed Ramadan Sir Bin Amin'
let inputString = 'Blessed Ramadan Sir Bin Amin';
//the 'swapCase' function is called with 'inputString' as an argument, and the returned swapped string is stored in 'outputString'
let outputString = swapCase(inputString);
//finally, the swapped string stored in 'outputString' is logged to the console and the output will be: "bLESSED rAMADAN sIR bIN aMIN", where each letter's case is swapped
console.log(outputString);
