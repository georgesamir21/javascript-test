/**
 * @returns index of the item if found
 * else a negative number shows the index we need to insert at
 */
export const binarySearch = (list, item, getValueFun) => {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const guess = list[mid];

    if (getValueFun(guess) === item) {
      return mid;
    }

    if (getValueFun(guess) > item) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  // end is equal to index we need to insert into...
  return -start;
};
