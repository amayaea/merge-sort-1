function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  const firstHalf = wholeArray.slice(0, Math.round(wholeArray.length / 2));
  const secondHalf = wholeArray.slice(Math.round(wholeArray.length / 2));

  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf, resultsArray = []) {
  let firstLength = firstHalf.length;
  let secondLength = secondHalf.length;

  if (firstLength === 0) {
    return [...resultsArray, ...secondHalf];
  }
  if (secondLength === 0) {
    return [...resultsArray, ...firstHalf];
  }
  if (firstHalf[0] < secondHalf[0]) {
    resultsArray.push(firstHalf[0]);
    //firstHalf.slice(1);
    firstHalf.shift();
    return merge(firstHalf, secondHalf, resultsArray);
  } else {
    resultsArray.push(secondHalf[0]);
    //secondHalf.slice(1);
    secondHalf.shift();
    return merge(firstHalf, secondHalf, resultsArray);
  }
}

function mergeSort(array) {
  if (array.length === 1) return array;
  const [first, second] = split(array);
  return merge(mergeSort(first), mergeSort(second), []);
}
