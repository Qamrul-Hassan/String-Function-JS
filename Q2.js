/* Count Vowels in a String.
Write a function that counts the number of vowels (a, e, i, o, u) in a given string.*/

function countVowels(str){
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(countVowels("programing"));