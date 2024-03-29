function swapCase(inputString) {
    let swappedString = "";
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString.charAt(i);
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char.toUpperCase();
        }
    }
    return swappedString;
}

let inputString = 'Blessed Ramadan Sir Bin Amin';
let outputString = swapCase(inputString);
console.log(outputString);
