const findMissingNumber = (collection) => {
  collection.sort((a, b) => a - b);
  let missingNumber;

  collection.forEach((item) => {
    let currentPosition = collection.indexOf(item);

    if (currentPosition < collection.length - 1) {
      let nextItem = collection[currentPosition + 1];
      let nextNumber = item + 1;

      if (nextNumber !== nextItem) missingNumber = nextNumber;
    }
  });

  return missingNumber == undefined ? collection : missingNumber;
};

console.log(findMissingNumber([1, 9, 10, 5, 4, 7, 6, 2, 3, 8, 11, 12, 13, 15]));
