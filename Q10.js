/* 10. Check if a String Contains a Substring.
Write a function that checks substring is present in a string. */

function containsSubstring(str, substring){
    return str.includes(substring);
}
console.log(containsSubstring("Helo! World", "World"));