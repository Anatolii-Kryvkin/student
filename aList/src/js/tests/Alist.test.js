const { AList } = require('../AList.js');

describe('addStart', function() {
  it('size after adding an item to the beginning', function() {
    const arrayAddStart = new AList([8, 10, 4, 2, 26, 25]);
    arrayAddStart.addStart(77);
    assert.deepEqual(arrayAddStart.size(), 7);
  });
});
describe('addEnd', function() {
  it('size after adding an item to the end', function() {
    const arrayAddEnd = new AList([8, 10, 4, 2, 26, 25]);
    arrayAddEnd.addEnd(88);
    assert.deepEqual(arrayAddEnd.size(), 7);
  });
});
describe('delStart', function() {
  it('Returns the first element', function() {
    const arrayDelStart = new AList([8, 10, 4, 2, 26, 25]);
    assert.deepEqual(arrayDelStart.delStart(), 8);
  });
  it('Returns the first element', function() {
    const arrayDelStart = new AList([8, 10, 4, 2, 26, 25]);
    arrayDelStart.delStart();
    assert.deepEqual(arrayDelStart.get(0), 10);
  });
  it('Length after return first element', function() {
    const arrayDelStart = new AList([8, 10, 4, 2, 26, 25]);
    arrayDelStart.delStart();
    assert.deepEqual(arrayDelStart.size(), 5);
  });
});
describe('delEnd', function() {
  it('Returns the last element', function() {
    const arrayDelEnd = new AList([8, 10, 4, 2, 26, 25]);
    arrayDelEnd.delEnd();
    assert.deepEqual(arrayDelEnd.get(arrayDelEnd.size() - 1), 26);
  });
  it('Length after return last element', function() {
    const arrayDelEnd = new AList([8, 10, 4, 2, 26, 25]);
    arrayDelEnd.delEnd();
    assert.deepEqual(arrayDelEnd.size(), 5);
  });
});
describe('delPos', function() {
  it('Returns position element', function() {
    const arrayDelPos = new AList([8, 10, 4, 2, 26, 25]);
    assert.deepEqual(arrayDelPos.delPos(2), 4);
  });
});
describe('addPos', function() {
  it('Add position elements', function() {
    const arrayAddPos = new AList([8, 10, 4, 2, 26, 25]);
    arrayAddPos.addPos(4, 8);
    assert.deepEqual(arrayAddPos.get(4), 8);
  });
  it('Length after return add position elements', function() {
    const arrayAddPos = new AList([8, 10, 4, 2, 26, 25]);
    arrayAddPos.clear();
    arrayAddPos.addPos(4, 8);
    assert.deepEqual(arrayAddPos.size(), 7);
  });
});
describe('get', function() {
  it('Get elements', function() {
    const arrayGet = new AList([8, 10, 4, 2, 26, 25]);
    arrayGet.get(3);
    assert.deepEqual(arrayGet.get(3), 2);
  });
  it('Length after get elements', function() {
    const arrayGet = new AList([8, 10, 4, 2, 26, 25]);
    arrayGet.clear();
    arrayGet.get(3);
    assert.deepEqual(arrayGet.size(), 6);
  });
});
describe('set', function() {
  it('Set elements', function() {
    const arraySet = new AList([8, 10, 4, 2, 26, 25]);
    assert.deepEqual(arraySet.set(5, 3), [8, 10, 4, 5, 26, 25]);
  });
  it('Set elements', function() {
    const arraySet = new AList([8, 10, 4, 2, 26, 25]);
    arraySet.clear();
    arraySet.set(5, 3);
    assert.deepEqual(arraySet.get(3), 5);
  });
});
describe('toString', function() {
  it('String arrays', function() {
    const arrayToString = new AList([8, 10, 4, 2, 26, 25]);
    assert.deepEqual(arrayToString.toString(), '810422625');
  });
});
describe('size', function() {
  it('Length', function() {
    const arraySize = new AList([8, 10, 4, 2, 26, 25]);
    arraySize.size();
    assert.deepEqual(arraySize.toString(), '810422625');
  });
});
describe('clear', function() {
  it('Return array', function() {
    const arrayClear = new AList([8, 10, 4, 2, 26, 25]);
    arrayClear.clear();
    assert.deepEqual(arrayClear.toString(), '810422625');
  });
});
describe('min', function() {
  it('Return min element', function() {
    const arrayMin = new AList([8, 10, 4, 2, 26, 25]);
    assert.deepEqual(arrayMin.min(), 2);
  });
});
describe('max', function() {
  it('Return max element', function() {
    const arrayMax = new AList([8, 10, 4, 2, 26, 25]);
    assert.deepEqual(arrayMax.max(), 26);
  });
});
describe('sort', function() {
  it('Return sort elements', function() {
    const arraySort = new AList([8, 10, 4, 2, 26, 25]);
    assert.deepEqual(arraySort.sort(), [2, 4, 8, 10, 25, 26]);
  });
});
describe('maxIndex', function() {
  it('Return index max element', function() {
    const arrayMaxIndex = new AList([8, 10, 4, 2, 26, 25]);
    arrayMaxIndex.maxIndex();
    assert.deepEqual(arrayMaxIndex.max(), 26);
  });
});
describe('minIndex', function() {
  it('Return index min element', function() {
    const arrayMinIndex = new AList([8, 10, 4, 2, 26, 25]);
    arrayMinIndex.minIndex();
    assert.deepEqual(arrayMinIndex.min(), 2);
  });
});
describe('reverse', function() {
  it('Reverse elements', function() {
    const arrayReverse = new AList([8, 10, 4, 2, 26, 25]);
    arrayReverse.reverse();
    assert.deepEqual(arrayReverse.toString(), '252624108');
  });

  it('Reverse elements size', function() {
    const arrayReverse = new AList([8, 10, 4, 2, 26, 25]);
    arrayReverse.clear();
    arrayReverse.reverse();
    assert.deepEqual(arrayReverse.size(), 6);
  });
});
describe('halfReverse', function() {
  it('HalfReverse elements', function() {
    const arrayHalfReverse = new AList([8, 10, 4, 2, 26, 25]);
    assert.deepEqual(arrayHalfReverse.halfReverse(), [4, 10, 8, 25, 26, 2]);
  });
  it('HalfReverse elements size', function() {
    const arrayHalfReverse = new AList([8, 10, 4, 2, 26, 25]);
    arrayHalfReverse.clear();
    arrayHalfReverse.halfReverse();
    assert.deepEqual(arrayHalfReverse.size(), 6);
  });
});
