/* Reverse a String
Write a function that takes a string and returns the reversed version of it. */

function rvrString(str){
    return str.split('').reverse().join('');
}
console.log(rvrString("Hello"));