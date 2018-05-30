/* Basic Algorithm Scripting:
> Slice and Splice

You are given two arrays and an index.
Use the array methods slice and splice to copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
 */


function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let tempArr = arr2.slice(0);
  for (let i = 0; i < arr1.length; i++) {
    tempArr.splice(n+i, 0, arr1[i]);
  }
  return tempArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);