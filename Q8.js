/* 8. Count Word in a String.
Write a function to count the number of words in a string. Words are separated by spaces.*/

function countWords(str){
    return str.trim().split(/\s+/).length;
}
console.log(countWords("Hello! World"));