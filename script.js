// quick fix for Cloud9 warning:
/* global $ */

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an "ay", or if a word
// begins with a vowel you just add "yay" to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.

$(document).ready(function() {
    
    $(".translate").click(function(){
        var unite = $("input").val();
        $(".outSpace").append(name); 

        function vowels(word){
            var firstVowels = word.charAt(0);
            var newWord = word.substring(1);
            if (firstVowels === 'a' || firstVowels === 'e' 
                || firstVowels === 'i' || firstVowels === 'o' 
                || firstVowels === 'u') {
                return firstVowels + newWord + 'yay';
            } 
        }   
                return
            var testWord4 = "coding";
            var testResult4 = convertWordWithConsonant(testWord4);
        function convertWordWithConsonant(word) {
            var thefirstChar = word.charAt(0);
                return newWord + thefirstChar +'ay';
        }
        
});


