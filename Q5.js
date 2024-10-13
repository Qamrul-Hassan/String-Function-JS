/* 5. Find the Length of a String
Write a function that returns the length of a given string without using a built-in 
length property. */

function strLength(str){
    let count = 0;
    for(let char of str){
        count++;
    }
    return count;
}

console.log(strLength("Qamrul"));