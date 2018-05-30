/* Basic Algorithm Scripting:
> Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 */


function titleCase(str) {
  let arr = [];
  let tempArr = [];
  arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    tempArr[i] = arr[i].substring(0,1).toUpperCase() + arr[i].substring(1).toLowerCase();
  }
  str = tempArr.join(' ');
  return str;
}

titleCase("I'm a little tea pot");

