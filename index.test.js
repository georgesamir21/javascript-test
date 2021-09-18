import { List } from './index.js';
import { binarySearch } from './binarySearch.js';
import { mergeSort } from './mergeSort.js';
const getValue = (o, sortKey) => (sortKey ? o[sortKey] : o);

describe('List', () => {
  it('should create list', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true });
    const expected = [1, 2, 3, 4];
    const actual = list.items;

    expect(actual).toEqual(expected);
  });

  it('should sort initial list items', () => {
    const list = List({ initial: [4, 3, -1, 1, 2, 5, 0] });
    const expected = [-1, 0, 1, 2, 3, 4, 5];
    const actual = list.items;

    expect(actual).toEqual(expected);
  });

  it('should sort initial list items', () => {
    const list = List({ initial: [100, -100, 10, 9, 200, -300] });
    const expected = [-300, -100, 9, 10, 100, 200];
    const actual = list.items;

    expect(actual).toEqual(expected);
  });

  it('should insert b into list a', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true });
    const expected = [1, 2, 3, 4, 5];
    const actual = list.insert(5).items;

    expect(actual).toEqual(expected);
  });

  it('should remove b from list a', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true });
    const expected = [1, 2, 3];
    const actual = list.remove(4).items;

    expect(actual).toEqual(expected);
  });

  it('Should not remove b from list a', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true });
    const actual = list.remove(5).items;
    const expected = [1, 2, 3, 4];

    expect(actual).toEqual(expected);
  });

  it('should findIndex of b at list a', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true });
    const expected = 2;
    const actual = list.findIndex(3);

    expect(actual).toEqual(expected);
  });

  // PLEASE cover the rest of the methods/scenarios with tests
});

describe('Test List of objects', () => {
  let list;
  beforeEach(() => {
    const randomItems = [
      { value: 5 },
      { value: 4 },
      { value: 3 },
      { value: 2 },
      { value: 0 },
      { value: 1 },
      { value: 7 },
      { value: 9 },
      { value: 6 },
      { value: 8 },
    ];
    list = List({
      sortKey: 'value',
      initial: randomItems,
    });
  });

  it('Should construct and sort an array of objects', () => {
    const expected = [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9 },
    ];

    expect(list.items).toEqual(expected);
  });

  it('Should insert item at the start of the list', () => {
    const actual = list.insert({ value: -1 });
    const expected = [
      { value: -1 },
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9 },
    ];

    expect(actual.items).toEqual(expected);
  });

  it('Should insert item at the middle of the list', () => {
    const actual = list.insert({ value: 5 });
    const expected = [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9 },
    ];
    expect(actual.items).toEqual(expected);
  });

  it('Should insert item at the end of the list', () => {
    const actual = list.insert({ value: 10 });
    const expected = [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9 },
      { value: 10 },
    ];
    expect(actual.items).toEqual(expected);
  });

  it('Should insert remove item from start of the list', () => {
    const actual = list.remove(1);
    const expected = [
      { value: 0 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9 },
    ];
    expect(actual.items).toEqual(expected);
  });

  it('Should insert remove item from middle of the list', () => {
    const actual = list.remove(5);
    const expected = [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9 },
    ];
    expect(actual.items).toEqual(expected);
  });

  it('Should insert remove item from end of the list', () => {
    const actual = list.remove(8);
    const expected = [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 9 },
    ];

    expect(actual.items).toEqual(expected);
  });

  it('Should get the index of item in the list', () => {
    const index = list.findIndex(9);
    expect(index).toEqual(9);
  });

  it('Should get negative number when searching for item not in the list', () => {
    const index = list.findIndex(10);
    expect(index).toBeLessThan(0);
  });
});

describe('Binary Serch Test', () => {
  it('Should Return 0', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const index = binarySearch(arr, 0, (a) => a);

    expect(index).toEqual(0);
  });

  it('Should Return -1', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const index = binarySearch(arr, 20, (a) => a);

    expect(index).toEqual(-11);
  });

  it('Should Return 10', () => {
    const arr = [
      {
        value: 0,
      },
      {
        value: 1,
      },
      {
        value: 2,
      },
      {
        value: 3,
      },
      {
        value: 4,
      },
      {
        value: 5,
      },
      {
        value: 6,
      },
      {
        value: 7,
      },
      {
        value: 8,
      },
      {
        value: 9,
      },
      {
        value: 10,
      },
    ];

    const index = binarySearch(arr, 10, (a) => getValue(a, 'value'));

    expect(index).toEqual(10);
  });

  it('get the right insertion index', () => {
    const arr = [
      {
        value: 0,
      },
      {
        value: 1,
      },
      {
        value: 2,
      },
      {
        value: 2,
      },
      {
        value: 2,
      },
      {
        value: 4,
      },
      {
        value: 5,
      },
      {
        value: 6,
      },
      {
        value: 7,
      },
      {
        value: 8,
      },
      {
        value: 9,
      },
      {
        value: 10,
      },
    ];

    const index = binarySearch(arr, 3, (a) => getValue(a, 'value'));

    expect(index).toEqual(-5);
  });
});

describe('Merge Sort Test', () => {
  it('Should Sort array of numbers', () => {
    const arr = [1, 0, 3, 2, 8, 5, 9, 6, 4, 7];
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const sorted = mergeSort(arr, (i) => getValue(i));

    expect(expected).toEqual(sorted);
  });

  it('Sould sort an array of objects', () => {
    const arr = [
      {
        value: 1,
      },
      {
        value: 8,
      },
      {
        value: 2,
      },
      {
        value: 7,
      },
      {
        value: 2,
      },
      {
        value: 0,
      },
      {
        value: 6,
      },
      {
        value: 2,
      },
      {
        value: 10,
      },
      {
        value: 4,
      },
      {
        value: 9,
      },
      {
        value: 5,
      },
    ];
    const sorted = mergeSort(arr, (item) => getValue(item, 'value'));
    const expected = [
      {
        value: 0,
      },
      {
        value: 1,
      },
      {
        value: 2,
      },
      {
        value: 2,
      },
      {
        value: 2,
      },
      {
        value: 4,
      },
      {
        value: 5,
      },
      {
        value: 6,
      },
      {
        value: 7,
      },
      {
        value: 8,
      },
      {
        value: 9,
      },
      {
        value: 10,
      },
    ];

    expect(sorted).toEqual(expected);
  });
});
