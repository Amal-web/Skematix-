function thirdLargestNumber(arr) {
  let first = 0,
    second = 0,
    third = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third) {
      third = arr[i];
    }
  }
  console.log(first, second, third);

  return third;
}

const arr = [1, 3, 5, 3, 7, 1, 4, 3];
console.log(thirdLargestNumber(arr));
