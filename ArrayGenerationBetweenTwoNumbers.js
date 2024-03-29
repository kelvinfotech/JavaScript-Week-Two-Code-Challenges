//the 'generateArray' function takes two parameters: 'start' and 'end', representing the starting and ending values of the range, respectively
function generateArray(start, end) {
    //an empty array named 'array' is initialized to store the generated values
    let array = [];
    //the code checks if 'start' is less than or equal to 'end' and if it is that way, it means that the range is in ascending order and so a 'for' loop is used to iterate from 'start' to 'end', inclusive whereby during each iteration, the value of 'i' is pushed into the array
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            array.push(i);
        }
    } else {
        //if 'start' is greater than 'end', indicating that the range is in descending order, another 'for' loop is used to iterate from 'start' to 'end', inclusive, but in reverse order (decrementing 'i') and similarly, each value of 'i' is also pushed into the array
        for (let i = start; i >= end; i--) {
            array.push(i);
        }
    }
    //after populating the array with the generated values, it is then returned from the function
    return array;
}
//finally, the 'generateArray' function is called with 'start = 0' and 'end = 79', and the result is logged to the console whereby this will generate an array containing integers from '0' to '79' (inclusive) in an ascending order
console.log(generateArray(0, 79));