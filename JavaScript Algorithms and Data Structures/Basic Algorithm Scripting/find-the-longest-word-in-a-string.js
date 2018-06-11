/* Basic Algorithm Scripting:
> Find the Longest Word in a String

Return the length of the longest word in the provided sentence.
Your response should be a number.
 */


function findLongestWordLength(str) {
  let tempArr = [];
  let longer = '';
  tempArr = str.split(' ');
  longer = tempArr[0].length;
  for (let i = 1; i < tempArr.length; i++){
    if (tempArr[i].length > longer) {
      longer = tempArr[i].length;
    }
  }
  return(longer);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

