describe("Split Array function", function() {
  it("is able to split an array into two halves", function() {
    // your code here
    expect(split([1, 2, 3])).toEqual([[1, 2], [3]]);
  });
});

describe("Merge function", function() {
  it("is able to merge two sorted arrays into one sorted array", function() {
    // test the merging algorithm
    expect(merge([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
  });
});

describe("MergeSort function", function() {
  it("It can sort an array", function() {
    // test the merging algorithm
    expect(mergeSort([2, 4, 1, 3])).toEqual([1, 2, 3, 4]);
  });
});
