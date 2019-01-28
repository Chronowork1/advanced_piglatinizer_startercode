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
  
  //
  /*function Vowels(){
    let word = $("input").val();
    let array = word.split(" ");
    console.log(array);
    let otherWords = word.substring(1);
    if(array.length > 1){
      if(word.charAt(0) === "a"|| word.charAt(0) === "e"|| word.charAt(0) ==="i" || word.charAt(0) ==="o" || word.charAt(0) === "u"){
        for(let i = 0 ; i < array.length; i++){
          console.log(array.join('yay ') + "yay");
        }
      } else {
        return otherWords + word.charAt(0) + "ay";
      }
    } else {
      if(word.charAt(0) === "a"|| word.charAt(0) === "e"|| word.charAt(0) ==="i" || word.charAt(0) ==="o" || word.charAt(0) === "u"){
        return word = word + "yay";
      } else {
        return otherWords + word.charAt(0) + "ay";
      }
    }
  }*/
  
  
  /*function Sentences(){
    let sentence = $("input").val();
    let splitSentence = sentence.split(" ");
    if(splitSentence.length > 1){
      
    }
    //let arraySentence = splitSentence.length;
    //this make a number.
    //let otherWords = arraySentence.substring(1);
    for (var i = 0; i < splitSentence.length; i++) {
      if(splitSentence.charAt(0) === "a"|| splitSentence.charAt(0) === "e"|| splitSentence.charAt(0) ==="i" || splitSentence.charAt(0) ==="o" || splitSentence.charAt(0) === "u"){
        return splitSentence = splitSentence + "yay";
      } else {
        return splitSentence = splitSentence + splitSentence.charAt(0) + "ay";
      }
    }
  }
  console.log(Sentences());*/

  //var myStringArray = ["Hello","World"];
    //var arrayLength = myStringArray.length;
          //console.log(splitSentence[i]);
    //Do something
  
  /*$(".translate").click(function(){
    console.log(Vowels());
    $(".output").text(Vowels());
  });*/

  
    function ifVowels(word) {
      if (word.charAt(0) === 'a' || 
      word.charAt(0) === 'e' || 
      word.charAt(0) === 'i'|| 
      word.charAt(0) === 'o' || 
      word.charAt(0) === 'u') {
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
      let vowels = word.charAt(0);
      let otherWords = word.substring(1);
      return otherWords + vowels + "ay";
    }    
        
    function pigLatin(word){
      if (ifVowels(word) === true) {
        return Yay(word);
      } else {
        return consonant(word);
      }
    }
    
    function sentences(word){
      let split = word.split(" ");
      for(let i = 0; i < split.length; i++){
        let translation = pigLatin(split[i]);
        $(".output").append(translation + " ");
      }
    }

     $(".translate").click(function(){
        $(".output").html("");
        var input = $(".wordBox").val();
        $(".output").text(sentences(input));
    });
});