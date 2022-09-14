const moveZeroesToEnd = (collection) => {
  let position;
  collection.forEach((item) => {
    if (item === 0) {
      position = collection.indexOf(item);
      collection.splice(position, 1);
      collection.push(item);
    }
  });

  return collection;
};

console.log(moveZeroesToEnd([0, 1, 2, 3, 4, 5, 0, 6, 7, 8, 0, 9]));
