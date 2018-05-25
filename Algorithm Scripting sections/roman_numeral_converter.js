/* JavaScript Algorithms and Data Structures Projects: 
* Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function convertToRoman(num) {
  
  var string = num.toString();
  var myArray = string.split("");
  var interimArr = [];
  var romNums = [];
  var digit = "1";
  var myNum = 0;
  for (i = 0; i < myArray.length; i++) {
    for (j = myArray.length-1-i; j > 0; j--){
      digit = digit + "0";
    }
    myNum = Number(digit);
    interimArr.push(myArray[i]*myNum);
    digit = "1";
  }
  
  for (var i = 0; i < interimArr.length; i++){
    switch (interimArr[i]) {
      case 0 :
        rom = "";
        break;
      case 1: 
      rom = "I";
      break;
        case 2: 
      rom = "II";
      break;
        case 3: 
      rom = "III";
      break;
        case 4: 
      rom = "IV";
      break;
        case 5: 
      rom = "V";
      break;
        case 6: 
      rom = "VI";
      break;
        case 7: 
      rom = "VII";
      break;
        case 8: 
      rom = "VIII";
      break;
        case 9: 
      rom = "IX";
      break;
        case 10: 
      rom = "X";
      break;
        case 20: 
      rom = "XX";
      break;
        case 30: 
      rom = "XXX";
      break;
        case 40: 
      rom = "XL";
      break;
        case 50: 
      rom = "L";
      break;
        case 60: 
      rom = "LX";
      break;
        case 70: 
      rom = "LXX";
      break;
        case 80: 
      rom = "LXXX";
      break;
        case 90: 
      rom = "XC";
      break;
       case 100: 
      rom = "C";
      break;
        case 200:
      rom = "CC";
      break;
        case 300: 
      rom = "CCC";
      break;
        case 400: 
      rom = "CD";
      break;
        case 500: 
      rom = "D";
      break;
        case 600: 
      rom = "DC";
      break;
        case 700: 
      rom = "DCC";
      break;
        case 800: 
      rom = "DCCC";
      break;
        case 900: 
      rom = "CM";
      break;
        case 1000: 
      rom = "M";
      break;
         case 2000: 
      rom = "MM";
      break;
         case 3000: 
      rom = "MMM";
      break;
    }
    
   romNums.push(rom);
  }
  
 var result =  romNums.join("");
  
 return result;
}

convertToRoman(3999);