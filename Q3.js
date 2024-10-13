/* 3. Check if a String is a platforme.
Write a function to check if a given string is a palindrome (reads the same froward and backward). */

function isPalindrome(str){
str = str.replace(/\s+/g, '').toLowerCase();
return str === str.split('').reverse().join('');
}

console.log(isPalindrome("madam"));