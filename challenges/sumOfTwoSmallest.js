const sumOfTwoSmallest = (collection) => {
  if (!Array.isArray(collection))
    throw new Error("Please pass valid array as parameter.");

  if (collection.length < 2)
    throw new Error("Please pass array with more than two numbers.");

  collection.sort((a, b) => a - b);

  const smallestNumber = collection[0];
  const secondSmallestNumber = collection[1];

  return smallestNumber + secondSmallestNumber;
};

console.log(sumOfTwoSmallest([15, 11, 17]));
