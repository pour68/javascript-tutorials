const countAndSum = (collection) => {
  let countOfPositiveNumbers = 0;
  let sumOfNegativeNumbers = 0;

  collection.forEach((item) => {
    if (item > 0) {
      countOfPositiveNumbers += 1;
    } else {
      sumOfNegativeNumbers += item;
    }
  });

  return [countOfPositiveNumbers, sumOfNegativeNumbers];
};

console.log(countAndSum([10, 15, -18, -20, -30, 18, 12]));
