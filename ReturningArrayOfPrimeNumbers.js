//the 'isPrime' function takes a number num as input and returns 'true (all prime numbers)' if it is a prime number, and 'false/[]' if otherwise
function isPrime(num) {
    //then it first checks if the number is less than or equal to '1' and if so, it returns 'false/[]', as prime numbers are greater than '1'
    if (num <= 1) return false;
    //again it checks if the number is '2' and if so, it returns true, as '2' is the only even prime number
    if (num === 2) return true;
    //it then checks if the number is even by checking if 'num % 2 === 0' and if it is that way, it returns 'false/[]', as no even number except '2' is prime
    if (num % 2 === 0) return false;
    //it then iterates from '3' up to the square root of 'num' in increments of '2' in order to check for only odd numbers and tests if 'num' is divisible by any of these numbers
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        //if from '3' up to the square root of 'num' in increments of '2' and the test of 'num' is divisible by any of these numbers, it returns 'false/[]'
        if (num % i === 0) return false;
    }
    //again if none of the conditions are met, it returns 'true', indicating that 'num' is prime.
    return true;
}
//the 'filterPrimeNumbers' function takes an array of numbers 'numbers' as input and returns a new array containing only the prime numbers from the input array
function filterPrimeNumbers(numbers) {
    //it then uses the 'filter' method to create a new array by iterating over each element of the input array and applying the 'isPrime' function to it and only the numbers for which 'isPrime' returns 'true (all prime numbers)' are included in the new array
    return numbers.filter(num => isPrime(num));
}
//an input array 'inputArray' is defined, containing a mix of prime and non-prime numbers
let inputArray = [70, 71, 72, 73, 74, 75, 76, 77, 78, 79];
//the 'filterPrimeNumbers' function is called with an 'inputArray' as the argument, and the result is logged to the console whereby the output will be an array containing only the prime numbers from the input array which are [71, 73, 79]
console.log(filterPrimeNumbers(inputArray));