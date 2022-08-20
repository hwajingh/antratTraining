
Array.prototype.myMap = function (callback) {
  var newArray = [];
  for (var i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

// console.log([2, 3, 4, 5].myMap((e) => e + 1));
let arr = ["tiger", "pen", "peter"];
console.log(
  arr.myMap((e) => {
    return e.toUpperCase();
  })
);
// console.log(Array.prototype);

Array.prototype.myReduce = function (callback, initialValue) {
  let previousValue = initialValue === undefined ? this[0] : initialValue;

  let startIndex = initialValue === undefined ? 1 : 0;

  for (let i = startIndex; i < this.length; i++) {
    previousValue = callback(previousValue, this[i], i, this);
  }

  return previousValue;
};

let numList = [1, 2, 3, 4, 56];
let initial = 10;
console.log(
  numList.myReduce((prev, cur, curIndex, arr) => prev + cur, initial)
);
