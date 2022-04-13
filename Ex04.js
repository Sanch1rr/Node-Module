function Ex04(number) {
  if (number % 3 == 0 || number % 7 == 0) {
    return true;
  } else return false;
}
console.log(Ex04(5));
console.log(Ex04(21));
console.log(Ex04(7));
console.log(Ex04(15));
