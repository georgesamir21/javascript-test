import R from 'ramda';
import { binarySearch } from './binarySearch.js';
import { mergeSort } from './mergeSort.js';
const getValue = (o, sortKey) => (sortKey ? o[sortKey] : o);

const sort = (list, sortKey) => {
  /**
   * mergeSort performance is much better than the native sort and ramda sort,
   * but using the merge sort on already sorted list have the same complexity as the unsorted list, native sort is better here...
   * I decided to use the native sort as the sort affects all the below functions insert/remove/findIndex and it cause low performance with them...
   * I think in real life example mergeSort will be much better...
   * to test mergeSort performance un-comment the line below....
   */
  // return mergeSort(list, (item) => getValue(item, sortKey));
  /**
   * Ramda sort performance is less than the native sort, so I used the native sort...
   */
  // return R.sort((a, b) => getValue(a, sortKey) - getValue(b, sortKey), list);
  return list.sort((a, b) => getValue(a, sortKey) - getValue(b, sortKey));
};

const findIndex = (list, sortKey) => (value) => {
  return binarySearch(list, value, (i) => getValue(i, sortKey));
};

/**
 * preserve the sorting while inserting into the list...
 */
const insert = (list, sortKey, item) => {
  const insertIndex = Math.abs(
    findIndex(list, sortKey)(getValue(item, sortKey))
  );
  return R.insert(insertIndex, item, list);
  // return list.concat(item);
};

const remove = (list, sortKey, value) => {
  const index = findIndex(list, sortKey)(value);
  return index >= 0 ? R.remove(index, 1, list) : list;
};

export const List = ({ sortKey, initial, initialOrder }) => {
  const items = initialOrder ? initial : sort(initial, sortKey);

  return {
    items,
    findIndex: findIndex(items, sortKey),
    remove: (value) =>
      List({
        sortKey,
        initial: remove(items, sortKey, value),
        initialOrder: true,
      }),

    insert: (item) =>
      List({
        sortKey,
        initial: insert(items, sortKey, item),
        initialOrder: true,
      }),
  };
};
