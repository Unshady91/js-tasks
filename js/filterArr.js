const ARRAY = [5, 3, 8, 1];

const compare = (arr, a, b) => arr.filter(item => item >= a && item <= b);

console.log(compare(ARRAY, 1, 4));

const compare1 = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    
    if (item < a || item > b) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

console.log(compare1(ARRAY, 1, 4));
