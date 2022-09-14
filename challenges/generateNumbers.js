Number.prototype[Symbol.iterator] = function () {
  let i = 0;
  return {
    next: () => {
      ++i;
      return {
        value: i,
        done: i > this,
      };
    },
  };
};

console.log([...3]);
