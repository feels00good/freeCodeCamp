/* Basic Algorithm Scripting:
> Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

 */

function chunkArrayInGroups(arr, size) {
  let tempArrFinal = [];
  while (arr.length > 0) {
    let tempArr = [];
    if (arr.length > size) {
      size = size;
    } else {
      size =  arr.length;
    }
    for (let i = 0; i < size; i++) {
        tempArr.push(arr[i])
      }
    arr.splice(0, size);
    tempArrFinal.push(tempArr);
  } 
  return tempArrFinal;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)