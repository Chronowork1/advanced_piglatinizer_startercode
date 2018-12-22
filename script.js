// quick fix for Cloud9 warning:
/* global $ */

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an "ay", or if a word
// begins with a vowel you just add "yay" to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.

$(document).ready(function(){
  function Vowels(){
      let word = $("input").val();
      let otherWords = word.substring(1);
      if(word.charAt(0) === "a"|| word.charAt(0) === "e"|| word.charAt(0) ==="i" || word.charAt(0) ==="o" || word.charAt(0) === "u"){
        return word = word + "yay";
      } else {
        return otherWords + word.charAt(0) + "ay";
      }
  }
  $(".translate").click(function(){
    console.log(Vowels());
    Vowels();
  });
});
  
 /* function Yay(){
    let word = $("input").val();
    word = word + "yay";
    return word;
  }*/
  



    /*function ifVowels(word) {
      if (word.charAt(0) === 'a' || word.charAt(0) === 'e' || word.charAt(0) === 'i'|| word.charAt(0) === 'o' || word.charAt(0) === 'u') {
        return true;
      } else {
        return false;
      }
    }*/
        
    /*function Yay(word) {
      word = word + "yay";
      return word;
    }*/
        
   /* function consonant(word) {
      let vowels = word.charAt(0);
      let otherWords = word.substring(1);
      return otherWords + vowels + "ay";
    }*/    
        
    /*function pigLatin(word){
      if (ifVowels(word) === true) {
        return Yay(word);
      } else {
        return consonant(word);
      }
    }*/
    

     /*$(".translate").click(function(){
        var add = $(".wordBox").val();
        var split = add.split(" ");
        $(".output").html(" ");
        $(".output").append(pigLatin(add));
    });*/