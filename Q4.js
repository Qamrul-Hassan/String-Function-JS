/* 4. Replace a character in a string.
Write a function that replaces all occurrences of a specific character in a string with another
character. */

function replaceChar (str, oldChar, newChar){
    return str.split(oldChar).join(newChar);
}
console.log(replaceChar("banana", 'a', 'o'));