/* Basic Algorithm Scripting:
* Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
 */


function repeatStringNumTimes(str, num) {

  let st = ''
  if(num <= 0) {
    st = '';
  } else {
    for (let i = 0; i < num; i++) {
      st = st + str;
    }
  }
  return st;
}

repeatStringNumTimes("abc", 3);