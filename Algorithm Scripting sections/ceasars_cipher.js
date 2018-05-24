/* JavaScript Algorithms and Data Structures Projects: 
* Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function rot13(str) { // LBH QVQ VG!
  var word ="";
  var coded = 0;
  var decoded = "";
  var phrase = "";
  
//Convert string to array
  
  var array = str.split(" ");
    for (var i = 0; i < array.length; i++){
      for (var j = 0; j < array[i].length; j++) {
        
//Test for non-alphabetic characters 
        
        if (array[i][j].charCodeAt()<65){
           decoded = array[i][j];
        }
         else {
            coded = array[i][j].charCodeAt()-13;
           
 //Test if this is fist 13 characters - replase them with last 13 characters
           
              switch (coded) {
                case 64: 
                  coded = 90;
                  break;
                case 63: 
                  coded = 89;
                  break;  
                case 62: 
                  coded = 88;
                  break;
                case 61: 
                  coded = 87;
                  break;
                case 60: 
                  coded = 86;
                  break; 
                case 59: 
                  coded = 85;
                  break;   
                case 58: 
                  coded = 84;
                  break; 
                case 57: 
                  coded = 83;
                  break;           
                case 56: 
                  coded = 82;
                  break; 
                case 55: 
                  coded = 81;
                  break;
                case 54: 
                  coded = 80;
                  break;
                case 53: 
                  coded = 79;
                  break; 
                case 52: 
                  coded = 78;
                  break;   
                }
//Decode back to char
           
          decoded = String.fromCharCode(coded); 
         }
        
//Concat characters into word
        
        word = word + decoded;
       }
      
//Concat words into phrase
      
      word = word + " ";
      
// cut " " at the end of final phrase
      
    phrase = word.slice(0, word.length-1);
    }  
  
  return phrase;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");