const merge = (leftArray, rightArray, getValueFun) => {
  let arr = [];
  while (leftArray.length && rightArray.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (getValueFun(leftArray[0]) < getValueFun(rightArray[0])) {
      arr.push(leftArray.shift());
    } else {
      arr.push(rightArray.shift());
    }
  }
  return [...arr, ...leftArray, ...rightArray];
};

export const mergeSort = (array, getValueFun) => {
  const half = array.length / 2;

  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(
    mergeSort(left, getValueFun),
    mergeSort(array, getValueFun),
    getValueFun
  );
};
