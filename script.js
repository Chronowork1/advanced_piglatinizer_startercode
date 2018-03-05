// quick fix for Cloud9 warning:
/* global $ */

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an "ay", or if a word
// begins with a vowel you just add "yay" to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.

$(document).ready(function() {
    
        function ifVowels(word) {
            if (word.charAt(0) === 'a' 
            || word.charAt(0) === 'e' 
            || word.charAt(0) === 'i'
            || word.charAt(0) === 'o' 
            || word.charAt(0) === 'u') {
                return true;
            } else {
                return false;
            }
        }
        
        function Yay(word) {
          word = word + "yay";
          return word;
        }
        
        function consonant(word) {
            var vowels = word.charAt(0);
            var otherWords = word.substring(1);
            return otherWords + vowels + "ay";
        }    
        
        function pigLatin(word){
            if (ifVowels(word) === true) {
                return Yay(word);
            } else {
                return consonant(word);
            }
        }

     $(".translate").click(function(){
        var add = $(".wordBox").val();
        $(".output").html("");
        $(".output").append(pigLatin(add)); 
        
    });
    
    
});
        
         /*var deletes = word.split();
            var yay = 'yay';
     
            var pigLatin = otherWords + vowels + yay;*/
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        /*function vowels(word){
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
        
});*/


