/* 9. Find a Most Frequent Character.
Write a function that finds the character that appears the most times in a string. */

function mostFrequentChar(str){
    let frequency={};

    for(let char of str){
        frequency[char] = (frequency[char] || 0) +1;
    }
    let maxfreq =0;
    let maxchar ='';

    for (let char in frequency){
        if (frequency[char] > maxfreq){
            maxfreq = frequency[char];
            maxchar = char;
        }
    }
    return maxchar;
}
console.log(mostFrequentChar("Qamrul Hassan Shajal"));