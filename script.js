// quick fix for Cloud9 warning:
/* global $ */

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an "ay", or if a word
// begins with a vowel you just add "yay" to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.

$(document).ready(function(){
  
  /*function consonants(){
    let consonant= ["b","c",'d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
    let consonantLength = consonant.length;
    for(let i = 0; i< consonantLength; i++){
      consonant[i];
    }
    return consonantLength;
  }
  console.log(consonants());
  */
  function Vowels(){
    let word = $("input").val();
    let otherWords = word.substring(1);
    if(word.charAt(0) === "a"|| word.charAt(0) === "e"|| word.charAt(0) ==="i" || word.charAt(0) ==="o" || word.charAt(0) === "u"){
      return word = word + "yay";
    } else {
      return otherWords + word.charAt(0) + "ay";
    }
  }
  
  function Sentences(){
    let sentence = $("input").val();
    let splitSentence = sentence.split(" ");
    let otherWords = splitSentence.length.substring(1);
    for (var i = 0; i < splitSentence.length; i++) {
      if(splitSentence.length.charAt(0) === "a"|| splitSentence.length.charAt(0) === "e"|| splitSentence.length.charAt(0) ==="i" || splitSentence.length.charAt(0) ==="o" || splitSentence.length.charAt(0) === "u"){
        return splitSentence.length = splitSentence.length + "yay";
      } else {
        return otherWords + splitSentence.length.charAt(0) + "ay";
      }
    }
    return Vowels[i];
  }

  //var myStringArray = ["Hello","World"];
    //var arrayLength = myStringArray.length;
          //console.log(splitSentence[i]);
    //Do something
  
  $(".translate").click(function(){
    console.log(Vowels());
    $(".output").text(Vowels());
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