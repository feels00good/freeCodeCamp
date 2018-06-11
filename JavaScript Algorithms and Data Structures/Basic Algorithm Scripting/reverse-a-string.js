/* Basic Algorithm Scripting:
> Reverse a String

Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
 */

function reverseString(str) {
  let newString = '';
  newString = str.split('').reverse().join('');
  console.log(newString)
  return newString;
}

reverseString("hello");
