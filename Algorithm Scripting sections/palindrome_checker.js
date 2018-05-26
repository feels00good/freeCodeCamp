function palindrome(str) {
  
  str = str.toLowerCase();
   var exp = /_/g;
    var newString = str.replace(exp, "");
    var nstr2 = newString.replace(/[^A-Za-z0-9]/g, "");
    
   var string = nstr2.split("");
   var reverse = string.reverse();
   string = reverse.join("");
  
 
   if (nstr2 == string) {
       return true;
   } else {
     return false;
   }
 
   return nstr2;
 }
 
 palindrome("race car");