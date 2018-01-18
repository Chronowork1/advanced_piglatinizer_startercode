// quick fix for Cloud9 warning:
/* global $ */

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an "ay", or if a word
// begins with a vowel you just add "yay" to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.

$(document).ready(function() {
    
$('.Translate').click(function(){
    var name = $('input').val();
    $('.outSpace').append(name); 
});    
    

    // This function should return true if the input word starts with a vowel,
    // otherwise it should return false.
  /*  function wordStartsWithVowel(word) {
        var thefirstChar = word.charAt(0);
            if ('a' === word.charAt(0) || 'e' === word.charAt(0) || 'i'=== word.charAt(0) || 'o'=== word.charAt(0) || 'u'=== word.charAt(0)) {
        return true;
    } else { 
        return false;
    } 
}

var testWord2 = "iphont";
var testResult2 = wordStartsWithVowel(testWord2);
    }

    // Appends "yay" to the end of the word and returns the word.
    function appendYayToWord(word) {
        var testWord3 = "excited";
    var testResult3 = appendYayToWord(testWord3);
    console.log(testResult3);

    function appendYayToWord(word) {
    return testWord3 + 'Yay';
    }
    }

    // Moves the first consonant to the end of the word, appends "ay" to the end of the word,
    // and returns the word.
    function convertWordWithConsonant(word) {
    var testWord4 = "coding";
    var testResult4 = convertWordWithConsonant(testWord4);

    function convertWordWithConsonant(word) {
    var thefirstChar = word.charAt(0);
    var newWord = word.substring(1);
        return newWord + thefirstChar +'ay';
    }
    console.log(testResult4);
    }

    // If the word starts with a vowel, return the result of appendYayToWord.
    // Otherwise, return the result of convertWordWithConsonant.
    function convertWordToPigLatin(word) {

    }

    // Create a click handler that takes is triggered when the user clicks the translate button.
        // Gets a word from the input box
        // Transforms the word to pig latin
        // Displays the result on the screen in the output element
});*/
